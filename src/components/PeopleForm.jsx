"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import Mark from "@/icons/other/Mark";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import Snipper from "@/icons/loading/Snipper";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";

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

const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const getCountryCodeFromIP = async () => {
    try {
        const response = await fetch("https://ipinfo.io/json?token=YOUR_API_TOKEN");
        const data = await response.json();
        return data.country.toLowerCase();
    } catch (error) {
        console.error("Error fetching country code:", error);
        return "us";
    }
};

function PeopleForm() {
    const t = useTranslations("people");
    const [fileSelected, setFileSelected] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [phoneCountryCode, setPhoneCountryCode] = useState("us");
    const countryCode = useCountryCode();

    const validationSchema = Yup.object({
        yourName: Yup.string().required(t("requiredError", {}, "The field is required.")),
        yourDomain: Yup.string().required(t("optionError", {}, "Select an option.")),
        email: Yup.string().email(t("emailError", {}, "Please enter a valid email address.")).required(t("requiredError", {}, "The field is required.")),
        phone: Yup.string().required(t("requiredError", {}, "The field is required.")),
        ///file: Yup.mixed().required("The field is required."),
        file: Yup.mixed(),
        explanation: Yup.string(),
    });

    const initialValues = {
        yourName: "",
        yourDomain: "",
        email: "",
        phone: "",
        file: null,
        explanation: "",
    };

    useEffect(() => {
        const fetchCountryCode = async () => {
            const countryCode = await getCountryCodeFromIP();
            setPhoneCountryCode(countryCode);
        };
        fetchCountryCode();
    }, []);

    const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
        try {
            console.log("Submitting values:", values);

            const fileBase64 = values.file ? await readFileAsBase64(values.file) : null;

            const payload = {
                ...values,
                attachFiles: fileBase64 ? [fileBase64] : [],
            };

            console.log("Payload:", payload);

            const response = await fetch("/api/emails/people", {
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
                document.querySelector('input[type="file"]').value = "";
                setFileSelected(false);
            } else {
                setStatus({ success: false });
                setIsSuccess(false);
                console.error("Failed to submit:", await response.text());
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus({ success: false });
            setIsSuccess(false);
        } finally {
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
                {({ isSubmitting, setFieldValue, status, errors, touched }) => (
                    <div className="wrapper">
                        <Form className="form _people">
                            <div className="row">
                                <Field name="yourName">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder={t("yourName", {}, "Your name")}
                                            className={form.touched.yourName && form.errors.yourName ? "invalid" : ""}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="row _select">
                                <Field name="yourDomain">
                                    {({ field }) => (
                                        <CustomSelect
                                            name="yourDomain"
                                            options={domainOptions}
                                            placeholder={t("yourDomain", {}, "Your domain")}
                                            {...field}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="row">
                                <Field name="email">
                                    {({ field, form }) => (
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder={t("email", {}, "Email")}
                                            className={form.touched.email && form.errors.email ? "invalid" : ""}
                                        />
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
                                                placeholder={t("phone", {}, "Your phone")}
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
                            <div
                                className={`row _file ${fileSelected ? "_active" : ""} ${touched.file && errors.file ? "_error" : ""
                                    }`}
                            >
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
                                        {t("removeFile", {}, "Remove File")}
                                    </button>
                                </div>
                            )}
                            <div className="row _textarea">
                                <div className="textarea-container">
                                    <label>{t("briefIntroduction", {}, "Brief Introduction")}</label>
                                    <Field name="explanation">
                                        {({ field, form }) => (
                                            <textarea
                                                {...field}
                                                placeholder={t("explainWhyYouWantToJoinOurTeam", {}, "Explain why you want to join our team.")}
                                                className={form.touched.explanation && form.errors.explanation ? "invalid" : ""}
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
                                {t("submitRequest", {}, "Submit Request")}
                            </button>
                            {isSubmitting && (
                                <div className="loading-icon">
                                    <Snipper />
                                </div>
                            )}

                            {Object.keys(errors).length > 0 && touched && (
                                <span className="general-error">
                                    <Mark />
                                    {t("requiredError", {}, "This field is required.")}
                                </span>
                            )}
                        </Form>
                        {status && status.success && isSuccess && (
                            <div className="success-message">
                                <span>{t("successMessage", {}, "Thank you!")}</span>
                                {t("successMessageText", {}, "Your request has been successfully received. Our team will review your information and contact you shortly.")}
                            </div>
                        )}
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default PeopleForm;