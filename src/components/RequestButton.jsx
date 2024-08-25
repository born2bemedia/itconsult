"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function RequestButton({ className, text, service, icon }) {
    const {
        setOrderPopupDisplay,
        setServiceValue,
    } = usePopup();

    const orderPopupOpen = () => {
        setServiceValue(service);
        setOrderPopupDisplay(true);
    };
    return (
        <>
            <button className={className} onClick={() => orderPopupOpen()}>
                {text}
                {icon}
            </button>
        </>
    );
}

export default RequestButton;