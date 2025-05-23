"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Select from "react-select";
import ArrowRight from "@/icons/slider/ArrowRight";
import Mark from "@/icons/other/Mark";
import Link from "next/link";
import Snipper from "@/icons/loading/Snipper";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";
// Кастомный компонент Select
const CustomSelect = ({ name, options, ...props }) => {

  const t = useTranslations("home");

  const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();

  const handleChange = (selectedOption) => {
    setFieldValue(name, selectedOption ? selectedOption.value : "");
    setFieldTouched(name, true);
  };

  return (
    <div className="row">
      <Select
        {...props}
        options={options}
        onChange={handleChange}
        value={options.find(option => option.value === values[name])}
        className={touched[name] && errors[name] ? "invalid" : ""}
        classNamePrefix="custom-select"
      />
      {touched[name] && errors[name] ? (
        <div className="error">{errors[name]}</div>
      ) : null}
    </div>
  );
};

function RequestForm() {
  const t = useTranslations("home");
  const countryCode = useCountryCode();
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    yourName: Yup.string().required(t("request.error1", {}, "The field is required.")),
    company: Yup.string().required(t("request.error1", {}, "The field is required.")),
    email: Yup.string()
      .email(t("request.error2", {}, "Please enter a valid email address."))
      .required(t("request.error1", {}, "The field is required.")),
    phone: Yup.string().required(t("request.error1", {}, "The field is required.")),
    activity: Yup.string().required(t("request.error1", {}, "The field is required.")),
    website: Yup.string().required(t("request.error1", {}, "The field is required.")),
    challenge: Yup.string().required(t("request.error1", {}, "The field is required.")),
    urgency: Yup.string().required(t("request.error3", {}, "Select an option.")),
    agreeToPolicy: Yup.boolean().oneOf([true], t("request.error4", {}, "You must agree to the Privacy Policy.")),
  });

  const initialValues = {
    yourName: "",
    company: "",
    website: "",
    activity: "",
    email: "",
    phone: "",
    challenge: "",
    urgency: "",
    agreeToPolicy: false,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
          setIsSuccess(true); // Устанавливаем статус успеха
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

  const options = [
    { value: "", label: t("request.value1", {}, "Urgency") },
    { value: "urgent", label: t("request.value2", {}, "Urgent") },
    { value: "high_priority", label: t("request.value3", {}, "High Priority") },
    { value: "standard", label: t("request.value4", {}, "Standard") },
  ];

  return (
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, errors, touched }) => (
          <div className="wrapper">
            <Form className="form">
              {Object.keys(errors).length > 0 && touched && (
                <span className="general-error">
                  <Mark />
                  {t("request.error", {}, "This field is required.")}
                </span>
              )}

              <div className="row">
                <Field name="yourName">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder={t("request.placeholder1", {}, "Your name")}
                        className={
                          form.touched.yourName && form.errors.yourName
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="company">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder={t("request.placeholder2", {}, "Company")}
                        className={
                          form.touched.company && form.errors.company
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="website">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder={t("request.placeholder3", {}, "Website")}
                        className={
                          form.touched.website && form.errors.website
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="activity">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder={t("request.placeholder4", {}, "Activity")}
                        className={
                          form.touched.activity && form.errors.activity
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="email">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="email"
                        placeholder={t("request.placeholder5", {}, "Email")}
                        className={
                          form.touched.email && form.errors.email
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="phone">
                  {({ field, form }) => (
                    <div>
                      <PhoneInput
                        country={countryCode}
                        value={field.value}
                        onChange={(value) => form.setFieldValue("phone", value)}
                        placeholder={t("request.placeholder6", {}, "Your phone")}
                        className={
                          form.touched.phone && form.errors.phone
                            ? "invalid"
                            : ""
                        }
                        excludeCountries={excludedCountries}
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="row">
                <Field name="challenge">
                  {({ field, form }) => (
                    <div>
                      <input
                        {...field}
                        type="text"
                        placeholder={t("request.placeholder7", {}, "Your challenge")}
                        className={
                          form.touched.challenge && form.errors.challenge
                            ? "invalid"
                            : ""
                        }
                      />
                    </div>
                  )}
                </Field>
              </div>
              <div className="row _select">
                <Field name="urgency">
                  {({ field, form }) => (
                    <div>
                      <CustomSelect
                        {...field}
                        options={options}
                        className={
                          form.touched.urgency && form.errors.urgency
                            ? "invalid"
                            : ""
                        }
                        classNamePrefix="custom-select"
                      />
                    </div>
                  )}
                </Field>
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
                          {t("request.policy", {}, "I agree to be contacted by Nexoria regarding my inquiry and understand that my data will be handled in accordance with the .")}
                          <Link href='/privacy-policy'>{t("request.policyLink", {}, "Privacy Policy")}</Link>
                        </span>
                      </label>
                    </div>
                  )}
                </Field>
              </div>

              <button
                type="submit"
                className="button"
                disabled={isSubmitting}
              >
                {t("request.button", {}, "Submit Request")}
                <ArrowRight />
              </button>
              {isSubmitting && (
                <div className="loading-icon">
                  <Snipper />
                </div>
              )}
            </Form>
            {isSuccess && (
              <div className="success-message">
                <span>{t("request.success", {}, "Thank you!")}</span> {t("request.successMessage", {}, "Your request has been successfully submitted. We’ll get back to you within 1 business day. If you have any urgent questions, please contact us at")} <a href="mailto:noreply@nexoria.ai">{t("request.successEmail", {}, "noreply@nexoria.ai")}</a>.
              </div>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestForm;