"use client";
import React, { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import ArrowRight from "@/icons/slider/ArrowRight";
import Mark from "@/icons/other/Mark";
import Snipper from "@/icons/loading/Snipper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const CustomDatePicker = ({ name, className }) => {
    const { setFieldValue, values, errors, touched } = useFormikContext();

    const inputClassName = className || '';

    return (
        <div className="row">
            <DatePicker
                selected={values[name]}
                onChange={(date) => setFieldValue(name, date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select event date"
                className={inputClassName}
            />
            {touched[name] && errors[name] ? (
                <div className="error">{errors[name]}</div>
            ) : null}
        </div>
    );
};

const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve({
            base64: reader.result.split(",")[1],
            name: file.name,
            type: file.type
        });
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const AboutForm = () => {
    const [fileSelected, setFileSelected] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
        /* file: Yup.mixed() */
        file: Yup.mixed().required("File is required"),
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
        file: null,
    };

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            console.log("Submitting values:", values);

            const fileBase64 = values.file ? await readFileAsBase64(values.file) : null;

            const payload = {
                ...values,
                attachFiles: fileBase64 ? [fileBase64] : [],
            };

            const response = await fetch("/api/emails/about", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                resetForm();
                setStatus({ success: true });
                setIsSuccess(true);
                // Reset custom selects and file input
                document.querySelector('input[type="file"]').value = ""; // Reset file input
                setFileSelected(false);
            } else {
                setStatus({ success: false });
                setIsSuccess(false);
            }
        } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setIsSuccess(false);
        } finally {
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
                {({ status, isSubmitting, setFieldValue }) => (
                    <div className="wrapper">
                        <Form className="form _about">
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

                            <div className="row _select">
                                <Field name="participationType">
                                    {({ field }) => (
                                        <CustomSelect
                                            name="participationType"
                                            options={participationOptions}
                                            {...field}
                                        />
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
                                    {({ field, form }) => (
                                        <CustomDatePicker
                                            name="eventDate"
                                            className={form.touched.eventDate && form.errors.eventDate ? "invalid" : ""}
                                        />
                                    )}
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

                            <div className="row _select">
                                <Field name="industry">
                                    {({ field }) => (
                                        <CustomSelect
                                            name="industry"
                                            options={industryOptions}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </div>
                             <div className={`row _file ${fileSelected ? "_active" : ""}`}>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={(event) => {
                                        setFieldValue("file", event.currentTarget.files[0]);
                                        setFileSelected(true);
                                    }}
                                />
                            </div>

                            {fileSelected && (
                                <div className="row _remove">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setFieldValue("file", null);
                                            setFileSelected(false);
                                        }}
                                    >
                                        Remove File
                                    </button>
                                </div>
                            )}

                            
                            

                            <div className="row">
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
                            </div>
                        </Form>

                        {status?.success && !isSubmitting && (
                            <div className="success-message">
                                <span>Thank you!</span>
                                Your request has been successfully received. Our team will review your information and contact you shortly.
                            </div>
                        )}
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default AboutForm;