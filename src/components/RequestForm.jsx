import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Select from "react-select";

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
    firstName: Yup.string().required("The field is required."),
    lastName: Yup.string().required("The field is required."),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("The field is required."),
    phone: Yup.string().required("The field is required."),
    website: Yup.string().required("The field is required."),
    your_challenge: Yup.string().required("The field is required."),
    yourOption: Yup.string().required("Select an option."),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    your_challenge: "",
    yourOption: "",
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
      console.log(JSON.stringify(values));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
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
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <div>
            {status && status.success ? (
              <div className="success-message">
                <h2>Thank you!</h2>
                <span>
                  Your request has been successfully received. Our team will
                  review your information and contact you shortly to discuss
                  your marketing challenges and the solutions we can provide.
                </span>
              </div>
            ) : (
              <>
                <h2 className="service-title">
                  Marketing Consultation Request
                </h2>

                <Form>
                  <div className="row">
                    <Field name="firstName">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            placeholder="First name"
                            className={
                              form.touched.firstName && form.errors.firstName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="error"
                          />
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="row">
                    <Field name="lastName">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            placeholder="Last name"
                            className={
                              form.touched.lastName && form.errors.lastName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
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
                            placeholder="Email"
                            className={
                              form.touched.email && form.errors.email
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
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
                            placeholder="Your phone"
                            className={
                              form.touched.phone && form.errors.phone
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
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
                            placeholder="Company website"
                            className={
                              form.touched.website && form.errors.website
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="website"
                            component="div"
                            className="error"
                          />
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="row">
                    <Field name="your_challenge">
                      {({ field, form }) => (
                        <div>
                          <input
                            {...field}
                            type="text"
                            placeholder="Your challenge"
                            className={
                              form.touched.your_challenge && form.errors.your_challenge
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="your_challenge"
                            component="div"
                            className="error"
                          />
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className="row">
                    <Field name="yourOption" component={CustomSelect} options={options} />
                    <ErrorMessage
                      name="yourOption"
                      component="div"
                      className="error"
                    />
                  </div>

                  <button
                    type="submit"
                    className="button"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
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
