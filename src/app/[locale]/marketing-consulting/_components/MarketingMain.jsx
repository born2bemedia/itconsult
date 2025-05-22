"use client";
import React, { useState, useEffect } from "react";
import MarketingTab1 from "../MarketingTabs/MarketingTab1";
import MarketingTab2 from "../MarketingTabs/MarketingTab2";
import MarketingTab3 from "../MarketingTabs/MarketingTab3";
import MarketingTab4 from "../MarketingTabs/MarketingTab4";
import MarketingTab5 from "../MarketingTabs/MarketingTab5";
import { useTranslations } from "next-intl";
const ItConsultingMain = () => {

  const t = useTranslations("marketingConsulting");

  const [activeTab, setActiveTab] = useState("tab1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="marketing-main">
      <div className="marketing-main__container _container">
        <div className="marketing-main__body">
          <div className="marketing-main__tabs">
            <div className="tabsIt">

              {!isMobile && (
                <div className="tabsIt__nav">
                  <button
                    onClick={() => tabChange("tab1")}
                    className={`tabsIt__button ${activeTab == "tab1" ? "active" : ""}`}
                  >
                    {t("tab1.title", {}, "Marketing Strategy and Planning")}
                  </button>
                  <button
                    onClick={() => tabChange("tab2")}
                    className={`tabsIt__button ${activeTab == "tab2" ? "active" : ""}`}
                  >
                    {t("tab2.title", {}, "Digital Marketing")}
                  </button>
                  <button
                    onClick={() => tabChange("tab3")}
                    className={`tabsIt__button ${activeTab == "tab3" ? "active" : ""}`}
                  >
                    {t("tab3.title", {}, "Content Marketing")}
                  </button>
                  <button
                    onClick={() => tabChange("tab4")}
                    className={`tabsIt__button ${activeTab == "tab4" ? "active" : ""}`}
                  >
                    {t("tab4.title", {}, "Marketing Automation and CRM")}
                  </button>
                  <button
                    onClick={() => tabChange("tab5")}
                    className={`tabsIt__button ${activeTab == "tab5" ? "active" : ""}`}
                  >
                    {t("tab5.title", {}, "Analytics and Reporting")}
                  </button>
                </div>
              )}

              <div className="tabsIt__content">
                {isMobile ? (
                  <>
                    <MarketingTab1 />
                    <MarketingTab2 />
                    <MarketingTab3 />
                    <MarketingTab4 />
                    <MarketingTab5 />

                  </>
                ) : (
                  <>
                    {activeTab == "tab1" && <MarketingTab1 />}
                    {activeTab == "tab2" && <MarketingTab2 />}
                    {activeTab == "tab3" && <MarketingTab3 />}
                    {activeTab == "tab4" && <MarketingTab4 />}
                    {activeTab == "tab5" && <MarketingTab5 />}
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ItConsultingMain;
