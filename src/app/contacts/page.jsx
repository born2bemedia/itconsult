import "@/styles/contacts.scss";
import "@/styles/base.scss";
import React from "react";
import ContactsHero from "./_components/ContactsHero";


export const metadata = {
    title: "Get in Touch with IT and Marketing Experts | Nexoria",
    description:
        "Contact Nexoria for inquiries and support or to discuss your IT and marketing needs. Our contact page provides all the details you need to get in touch.",
    openGraph: {
        title: "Get in Touch with IT and Marketing Experts | Nexoria",
        description:
            "Contact Nexoria for inquiries and support or to discuss your IT and marketing needs. Our contact page provides all the details you need to get in touch.",
        images: "https://nexoria.ai/images/banner.jpg/",
    },
};

const ContactUs = () => {
    return (
        <>
            <ContactsHero />
        </>
    );
};

export default ContactUs;