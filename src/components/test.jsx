





import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

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
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    your_challenge: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
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

  return (
    <div className="request-form">
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
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      className={
                        touched.firstName && errors.firstName
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

                  <div className="row">
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      className={
                        touched.lastName && errors.lastName
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

                  <div className="row">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={
                        touched.email && errors.email ? "invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="row">
                    <PhoneInput
                      country={countryCode}
                      value=""
                      onChange={(value) => setFieldValue("phone", value)}
                      placeholder="Your phone"
                      className={
                        touched.phone && errors.phone ? "invalid" : ""
                      }
                    />
                    <ErrorMessage name="phone" component="span" />
                  </div>

                  <div className="row">
                    <Field
                      name="website"
                      type="text"
                      placeholder="Company website"
                      className={
                        touched.website && errors.website ? "invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="row">
                    <Field
                      name="your_challenge"
                      type="text"
                      placeholder="Your challenge"
                      className={
                        touched.your_challenge && errors.your_challenge
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

                  <div className="row">
                    <Field as="select" name="yourOption" className={touched.yourOption && errors.yourOption ? "invalid" : ""}>
                      <option value="" label="Select an option" />
                      <option value="option1" label="Option 1" />
                      <option value="option2" label="Option 2" />
                      <option value="option3" label="Option 3" />
                    </Field>
                    <ErrorMessage name="yourOption" component="div" className="error" />
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
