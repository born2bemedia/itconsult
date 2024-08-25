"use client";
import React, { useState, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [requestPopupDisplay, setRequestPopupDisplay] = useState(false);
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [thanksPopupDisplay, setThanksPopupDisplay] = useState(false);
  const [serviceValue, setServiceValue] = useState(false);

  return (
    <PopupsContext.Provider
      value={{
        requestPopupDisplay,
        setRequestPopupDisplay,
        orderPopupDisplay,
        setOrderPopupDisplay,
        thanksPopupDisplay,
        setThanksPopupDisplay, 
        serviceValue,
        setServiceValue
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);