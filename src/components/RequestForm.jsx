"use client";
import React from "react";
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

// Кастомный компонент Select
const CustomSelect = ({ name, options, ...props }) => {
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
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    yourName: Yup.string().required("The field is required."),
    company: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    activity: Yup.string().required("The field is required."),
    website: Yup.string().required("The field is required."),
    challenge: Yup.string().required("The field is required."),
    urgency: Yup.string().required("Select an option."),
    agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the Privacy Policy."),
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
    { value: "", label: "Urgency" },
    { value: "urgent", label: "Urgent" },
    { value: "high_priority", label: "High Priority" },
    { value: "standard", label: "standard" },
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
            {status && status.success ? (
              <div className="success-message">
                <h2>Thank you!</h2>
                <span>
                  Your request has been successfully received. Our team will review
                  your information and contact you shortly to discuss your marketing
                  challenges and the solutions we can provide.
                </span>
              </div>
            ) : (
              <>
                <Form className="form">
                  {Object.keys(errors).length > 0 && touched && (
                    <span className="general-error">
                      <Mark />
                      This field is required.
                    </span>
                  )}

                  <div className="row">
                    <Field name="yourName">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            placeholder="Your name"
                            className={
                              form.touched.yourName && form.errors.yourName
                                ? "invalid"
                                : ""
                            }
                          />
                          {/* <ErrorMessage
                            name="yourName"
                            component="span"
                            className="error"
                          /> */}
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
                            placeholder="Company"
                            className={
                              form.touched.company && form.errors.company
                                ? "invalid"
                                : ""
                            }
                          />
                          {/* <ErrorMessage
                            name="company"
                            component="span"
                            className="error"
                          /> */}
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
                            placeholder="Website"
                            className={
                              form.touched.website && form.errors.website
                                ? "invalid"
                                : ""
                            }
                          />
                          {/* <ErrorMessage
                            name="website"
                            component="span"
                            className="error"
                          /> */}
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
                            placeholder="Activity"
                            className={
                              form.touched.activity && form.errors.activity
                                ? "invalid"
                                : ""
                            }
                          />
                          {/*  <ErrorMessage
                            name="activity"
                            component="span"
                            className="error"
                          /> */}
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
                            placeholder="Email"
                            className={
                              form.touched.email && form.errors.email
                                ? "invalid"
                                : ""
                            }
                          />
                          {/*  <ErrorMessage
                            name="email"
                            component="span"
                            className="error"
                          /> */}
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
                            placeholder="Your phone"
                            className={
                              form.touched.phone && form.errors.phone
                                ? "invalid"
                                : ""
                            }
                          />
                          {/* <ErrorMessage name="phone" component="span" /> */}
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
                            placeholder="Your challenge"
                            className={
                              form.touched.challenge && form.errors.challenge
                                ? "invalid"
                                : ""
                            }
                          />
                          {/*  <ErrorMessage
                            name="challenge"
                            component="span"
                            className="error"
                          /> */}
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
                              I agree to be contacted by Nexoria regarding my inquiry and
                              understand that my data will be handled in accordance with
                              the <Link href="privacy-policy">Privacy Policy</Link>.
                            </span>
                          </label>
                          {/* <ErrorMessage
                            name="agreeToPolicy"
                            component="span"
                            className="error"
                          /> */}
                        </div>
                      )}
                    </Field>
                  </div>

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
        )}
      </Formik>

    </div>
  );
}

export default RequestForm;