"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import ArrowRight from "@/icons/slider/ArrowRight";
import useCountryCode from "@/utils/useCountryCode";
import Mark from "@/icons/other/Mark";
import Snipper from "@/icons/loading/Snipper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";

// Кастомный компонент Select
const CustomSelect = ({ name, options, placeholder, ...props }) => {
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
                placeholder={placeholder}
                className={touched[name] && errors[name] ? "invalid" : ""}
                classNamePrefix="custom-select"
            />
            {touched[name] && errors[name] ? (
                <div className="error">{errors[name]}</div>
            ) : null}
        </div>
    );
};


function PeopleForm() {
    const countryCode = useCountryCode();
    const validationSchema = Yup.object({
        yourName: Yup.string().required("The field is required."),
        yourDomain: Yup.string().required("Select an option."),
        email: Yup.string().email("Please enter a valid email address.").required("The field is required."),
        phone: Yup.string().required("The field is required."),
        cv: Yup.mixed().required("The field is required."),
        explanation: Yup.string(), // Поле необязательное
    });

    const initialValues = {
        yourName: "",
        yourDomain: "",
        email: "",
        phone: "",
        cv: null,
        explanation: "",
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            const response = await fetch("/api/emails/people", {
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

    const domainOptions = [
        { value: "it", label: "IT" },
        { value: "marketing", label: "Marketing" },
        { value: "other", label: "Other" },
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
                                    your information and contact you shortly.
                                </span>
                            </div>
                        ) : (
                            <>
                                <Form className="form _people">
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
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row _select">
                                        <Field name="yourDomain">
                                            {({ field }) => (
                                                <CustomSelect
                                                    name="yourDomain"
                                                    options={domainOptions}
                                                    {...field}
                                                    placeholder="Your domain"
                                                />
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
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row _file">
                                        <Field name="cv">
                                            {({ field }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="file"
                                                        className="file-input"
                                                        placeholder="Your CV"
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row _textarea">
                                        <div className="textarea-container">
                                            <label htmlFor="explanation">Brief Introduction</label>
                                            <Field name="explanation">
                                                {({ field, form }) => (
                                                    <textarea
                                                        {...field}
                                                        placeholder="Explain why you want to join our team."
                                                        className={
                                                            form.touched.explanation && form.errors.explanation
                                                                ? "invalid"
                                                                : ""
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="request-button"
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

                                    {Object.keys(errors).length > 0 && touched && (
                                        <span className="general-error">
                                            <Mark />
                                            There are some errors in the form. Please review the fields.
                                        </span>
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

export default PeopleForm; 