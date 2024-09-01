"use client";
import React from "react";
import { usePopup } from "@/context/PopupsContext";

function RequestButton({ className, text, icon }) {
  const { setOrderPopupDisplay } = usePopup();

  const requestPopupOpen = () => {
    setOrderPopupDisplay(true); // Открыть OrderPopup
  };

  return (
    <button className={className} onClick={requestPopupOpen}>
      {text}
      {icon}
    </button>
  );
}

export default RequestButton;
