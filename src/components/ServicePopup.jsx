"use client";
import React from "react";
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


const ServicePopup = () => {
  const { servicePopupDisplay, setServicePopupDisplay, currentService } = usePopup();
  const countryCode = useCountryCode();

  if (!servicePopupDisplay) return null;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("The field is required."),
    company: Yup.string().required("The field is required."),
    website: Yup.string().required("The field is required."),
    activity: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the privacy policy."),
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
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`request-popup-wrap ${servicePopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
        }) => (
          <div>
            <div className="overlay" onClick={() => closePopup(resetForm)}></div>
            <div className="popup-inner">
              <div className="order-popup">
                <div className="order-popup__content">
                  <div className="order-popup__top">
                    <h2 className="order-popup__title">{currentService} Request</h2>
                    <button
                      className="order-popup__close"
                      onClick={closePopup}
                      aria-label="Close popup"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  <div className="order-popup__form">
                    <div className="request-form">
                      <div className="wrapper">
                        {status && status.success ? (
                          <div className="success-message">
                            <h2>Thank you!</h2>
                            <span>
                              Your request has been successfully received. Our team
                              will review your information and contact you shortly to
                              discuss your marketing challenges and the solutions we
                              can provide.
                            </span>
                          </div>
                        ) : (
                          <>
                            <Form className="form">
                              <Field
                                type="hidden"
                                name="service"
                                value={`${currentService} Request`}
                              />
                              <div className="row">
                                <Field
                                  name="firstName"
                                  type="text"
                                  placeholder="Your name"
                                  className={touched.firstName && errors.firstName ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="firstName" component="div" className="error" /> */}
                              </div>

                              <div className="row">
                                <Field
                                  name="company"
                                  type="text"
                                  placeholder="Company"
                                  className={touched.company && errors.company ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="company" component="div" className="error" /> */}
                              </div>

                              <div className="row">
                                <Field
                                  name="website"
                                  type="text"
                                  placeholder="Website"
                                  className={touched.website && errors.website ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="website" component="div" className="error" /> */}
                              </div>

                              <div className="row">
                                <Field
                                  name="activity"
                                  type="text"
                                  placeholder="Activity"
                                  className={touched.activity && errors.activity ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="activity" component="div" className="error" /> */}
                              </div>

                              <div className="row">
                                <Field
                                  name="email"
                                  type="email"
                                  placeholder="Email"
                                  className={touched.email && errors.email ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="email" component="div" className="error" /> */}
                              </div>

                              <div className="row">
                                <PhoneInput
                                  country={countryCode}
                                  value=""
                                  onChange={(value) => setFieldValue("phone", value)}
                                  placeholder="Your phone"
                                  className={touched.phone && errors.phone ? "invalid" : ""}
                                />
                                {/* <ErrorMessage name="phone" component="div" className="error" /> */}
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
                                          I agree to be contacted by Nexoria regarding my inquiry and
                                          understand that my data will be handled in accordance with
                                          the <Link href="/privacy-policy">Privacy Policy</Link>.
                                        </span>
                                      </label>
                                      {/*  <ErrorMessage
                                  name="agreeToPolicy"
                                  component="span"
                                  className="error"
                                /> */}
                                    </div>
                                  )}
                                </Field>
                              </div>

                              {Object.keys(errors).length > 0 && touched && (
                                <span className="general-error">
                                  This field is required.
                                </span>
                              )}

                              <button
                                type="submit"
                                className="button"
                                disabled={isSubmitting}
                              >
                                Submit Request
                                <ArrowRight />
                              </button>
                              {isSubmitting && (
                                <div className="loading-icon">
                                  <Snipper />
                                </div>
                              )}
                            </Form>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <img class="order-popup__image" src="/images/popup/popup-img-01.webp"></img>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ServicePopup;