"use client";
import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import ArrowRight from "@/icons/slider/ArrowRight";
import Mark from "@/icons/other/Mark";
import Snipper from "@/icons/loading/Snipper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
                value={options.find((option) => option.value === values[name])}
                className={touched[name] && errors[name] ? "invalid" : ""}
                classNamePrefix="custom-select"
            />
            {touched[name] && errors[name] ? (
                <div className="error">{errors[name]}</div>
            ) : null}
        </div>
    );
};

// Кастомный компонент DatePicker
const CustomDatePicker = ({ name }) => {
    const { setFieldValue, values } = useFormikContext();

    return (
        <div className="row">
            <DatePicker
                selected={values[name]}
                onChange={(date) => setFieldValue(name, date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select event date"
                className="date-picker"
            />
        </div>
    );
};

// Кастомный компонент для загрузки файлов
const CustomFileUpload = ({ name }) => {
    const { setFieldValue } = useFormikContext();

    const handleFileChange = (event) => {
        setFieldValue(name, event.currentTarget.files);
    };

    return (
        <div className="row">
            <input type="file" name={name} onChange={handleFileChange} multiple />
        </div>
    );
};

function AboutForm() {
    const validationSchema = Yup.object({
        contactPerson: Yup.string().required("The field is required."),
        contactEmail: Yup.string().email("Please enter a valid email address.").required("The field is required."),
        organisingCompany: Yup.string().required("The field is required."),
        eventName: Yup.string().required("The field is required."),
        eventLink: Yup.string().url("Please enter a valid URL.").required("The field is required."),
        industry: Yup.string().required("Select an option."),
        eventLocation: Yup.string().required("The field is required."),
        eventDate: Yup.date().required("Select a date."),
        eventTopic: Yup.string().required("The field is required."),
        participationType: Yup.string().required("Select an option."),
        agreeToPolicy: Yup.boolean().oneOf([true], "You must agree to the Privacy Policy."),
        attachFiles: Yup.mixed(),
    });

    const initialValues = {
        contactPerson: "",
        contactEmail: "",
        organisingCompany: "",
        eventName: "",
        eventLink: "",
        industry: "",
        eventLocation: "",
        eventDate: null,
        eventTopic: "",
        participationType: "",
        attachFiles: [],
        agreeToPolicy: false,
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        const formData = new FormData();
        for (const key in values) {
            if (key === "attachFiles") {
                for (const file of values.attachFiles) {
                    formData.append("files", file);
                }
            } else {
                formData.append(key, values[key]);
            }
        }

        try {
            const response = await fetch("/api/emails/about", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                setSubmitting(false);
                resetForm();
                setStatus({ success: true });
            } else {
                setStatus({ success: false });
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setSubmitting(false);
        }
    };

    const industryOptions = [
        { value: "tech", label: "Tech" },
        { value: "finance", label: "Finance" },
        { value: "education", label: "Education" },
    ];

    const participationOptions = [
        { value: "speaker", label: "Speaker" },
        { value: "attendee", label: "Attendee" },
        { value: "exhibitor", label: "Exhibitor" },
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
                                <span>Your request has been successfully received. Our team will review your information and contact you shortly.</span>
                            </div>
                        ) : (
                            <>
                                <Form className="form">
                                    {Object.keys(errors).length > 0 && touched && (
                                        <span className="general-error">
                                            <Mark />
                                            There are some errors in the form. Please review the fields.
                                        </span>
                                    )}

                                    {/* Поля формы */}
                                    <div className="row">
                                        <Field name="contactPerson">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Contact person"
                                                        className={form.touched.contactPerson && form.errors.contactPerson ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="contactEmail">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="email"
                                                        placeholder="Contact email"
                                                        className={form.touched.contactEmail && form.errors.contactEmail ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="organisingCompany">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Organising company"
                                                        className={form.touched.organisingCompany && form.errors.organisingCompany ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="eventName">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Event name"
                                                        className={form.touched.eventName && form.errors.eventName ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="eventLink">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="url"
                                                        placeholder="Event link"
                                                        className={form.touched.eventLink && form.errors.eventLink ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="industry">
                                            {({ field }) => (
                                                <div>
                                                    <CustomSelect name="industry" options={industryOptions} />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="eventLocation">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Event location"
                                                        className={form.touched.eventLocation && form.errors.eventLocation ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="eventDate">
                                            {() => <CustomDatePicker name="eventDate" />}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="eventTopic">
                                            {({ field, form }) => (
                                                <div>
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Event topic"
                                                        className={form.touched.eventTopic && form.errors.eventTopic ? "invalid" : ""}
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="row">
                                        <Field name="participationType">
                                            {({ field }) => (
                                                <div>
                                                    <CustomSelect name="participationType" options={participationOptions} />
                                                </div>
                                            )}
                                        </Field>
                                    </div>

                                    {/* Поле для загрузки файлов */}
                                    <div className="row">
                                        <Field name="attachFiles">
                                            {() => <CustomFileUpload name="attachFiles" />}
                                        </Field>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="request-submit">
                                        Submit Request
                                        {isSubmitting ? <Snipper /> : <ArrowRight />}
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

export default AboutForm;
