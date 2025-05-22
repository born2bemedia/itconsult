"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import ArrowRight from "@/icons/slider/ArrowRight";
import CloseIcon from "@/icons/other/CloseIcon";
import Snipper from "@/icons/loading/Snipper";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";

const ServicePopup = () => {

  const t = useTranslations("servicePopup");

  const { servicePopupDisplay, setServicePopupDisplay, currentService } = usePopup();
  const countryCode = useCountryCode();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!servicePopupDisplay) return null;

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("validation.requiredError", {}, "The field is required.")),
    company: Yup.string().required(t("validation.requiredError", {}, "The field is required.")),
    website: Yup.string().required(t("validation.requiredError", {}, "The field is required.")),
    activity: Yup.string().required(t("validation.requiredError", {}, "The field is required.")),
    email: Yup.string()
      .email(t("validation.emailError", {}, "Please enter a valid email address."))
      .required(t("validation.requiredError", {}, "The field is required.")),
    phone: Yup.string().required(t("validation.requiredError", {}, "The field is required.")),
    agreeToPolicy: Yup.boolean().oneOf([true], t("validation.agreeToPolicyError", {}, "You must agree to the privacy policy.")),
  });

  const initialValues = {
    firstName: "",
    company: "",
    website: "",
    activity: "",
    email: "",
    phone: "", 
    agreeToPolicy: false,
    service: `${currentService} Request`,
  };

  const closePopup = (resetForm) => {
    setServicePopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
    setIsSuccess(false);
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: `${currentService} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
      });

      if (response.ok) {
        setSubmitting(false);
        setIsSuccess(true);
        resetForm(); // Сброс формы после успешной отправки
      } else {
        setStatus({ success: false });
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
      setIsSuccess(false);
    }
  };

  return (
    <div className={`request-popup-wrap ${servicePopupDisplay ? "opened" : ""}`}>
      <div className="overlay" onClick={() => closePopup(null)}></div>
      <div className="popup-inner">
        <div className="order-popup">
          <div className="order-popup__content">
            <div className="order-popup__top">
              <h2 className="order-popup__title">{currentService} {t("title", {}, "Request")}</h2>
              <button
                className="order-popup__close"
                onClick={() => closePopup(null)}
                aria-label="Close popup"
              >
                <CloseIcon />
              </button>
            </div>

            <div className={`order-popup__form ${isSuccess ? "hidden" : ""}`}>
              <div className="request-form">
                <div className="wrapper">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}
                  >
                    {({
                      isSubmitting,
                      status,
                      touched,
                      errors,
                      resetForm,
                      setFieldValue,
                      values,
                    }) => (
                      <Form className="form">
                        <Field
                          type="hidden"
                          name="service"
                          value={`${currentService} ${t("service", {}, "Request")}`}
                        />
                        <div className="row">
                          <Field
                            name="firstName"
                            type="text"
                            placeholder={t("firstName", {}, "Your name")}
                            className={touched.firstName && errors.firstName ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="company"
                            type="text"
                            placeholder={t("company", {}, "Company")}
                            className={touched.company && errors.company ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="website"
                            type="text"
                            placeholder={t("website", {}, "Website")}
                            className={touched.website && errors.website ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="activity"
                            type="text"
                            placeholder={t("activity", {}, "Activity")}
                            className={touched.activity && errors.activity ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <Field
                            name="email"
                            type="email"
                            placeholder={t("email", {}, "Email")}
                            className={touched.email && errors.email ? "invalid" : ""}
                          />
                        </div>

                        <div className="row">
                          <PhoneInput
                            country={countryCode}
                            value={values.phone} // Обратите внимание на это
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder={t("phone", {}, "Your phone")}
                            className={touched.phone && errors.phone ? "invalid" : ""}
                            excludeCountries={excludedCountries}
                          />
                        </div>

                        <div className="row _policy">
                          <Field name="agreeToPolicy">
                            {({ field, form }) => (
                              <div className="wrapper">
                                <label
                                  className={`checkbox-label ${field.value ? "_active" : ""} ${form.touched.agreeToPolicy && form.errors.agreeToPolicy
                                    ? "invalid"
                                    : ""
                                    }`}
                                >
                                  <input
                                    {...field}
                                    type="checkbox"
                                    checked={field.value}
                                    className={
                                      form.touched.agreeToPolicy && form.errors.agreeToPolicy
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                  <span>
                                    {t("agreeToPolicy", {}, "I agree to be contacted by Nexoria regarding my inquiry and understand that my data will be handled in accordance with the")}
                                    <Link href="/privacy-policy">{t("privacyPolicy", {}, "Privacy Policy")}</Link>.
                                  </span>
                                </label>
                              </div>
                            )}
                          </Field>
                        </div>

                        {Object.keys(errors).length > 0 && touched && (
                          <span className="general-error">
                            {t("validation.requiredError", {}, "This field is required.")}
                          </span>
                        )}

                        <button
                          type="submit"
                          className="button"
                          disabled={isSubmitting}
                        >
                          {t("submitRequest", {}, "Submit Request")}
                          <ArrowRight />
                        </button>
                        {isSubmitting && (
                          <div className="loading-icon">
                            <Snipper />
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                  {isSuccess && (
                    <div className="success-message">
                      <span>{t("successMessage.title", {}, "Thank you!")}</span>
                      {t("successMessage.description", {}, "Your request has been successfully received. Our team will review your information and contact you shortly to discuss your marketing challenges and the solutions we can provide.")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <img className="order-popup__image" src="/images/popup/popup-img-01.webp" />
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;