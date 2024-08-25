"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";
import CloseIcon from "@/icons/other/CloseIcon";
import RequestForm from "@/components/RequestForm";

const OrderPopup = () => {
    const { orderPopupDisplay, setOrderPopupDisplay } = usePopup();

    const closePopup = () => {
        setOrderPopupDisplay(false);
    };

    /* const handleSubmit = () => { }; */

    if (!orderPopupDisplay) return null;

    return (
        <div className={`request-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
            <div className="overlay" onClick={closePopup}></div>
            <div className="popup-inner">
                <div className="order-popup">
                    <div className="order-popup__content">
                        <div className="order-popup__top">
                            <h2 className="order-popup__title">Request a Consultation</h2>
                            <h3 className="order-popup__subtitle">Let’s Discuss How We Can Help Your Business Grow.</h3>
                            <button
                                className="order-popup__close"
                                onClick={closePopup}
                                aria-label="Close popup"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="order-popup__form"><RequestForm /></div>
                    </div>
                    <img className="order-popup__image" src="/images/popup/popup-img-01.webp"></img>
                </div>
            </div>
        </div>
    );
};

export default OrderPopup;