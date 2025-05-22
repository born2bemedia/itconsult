"use client";
import React, { useState, useEffect } from "react"; // Добавил импорт хуков
import ItTab1 from "../ItConsultingTabs/ItTab1";
import ItTab2 from "../ItConsultingTabs/ItTab2";
import ItTab3 from "../ItConsultingTabs/ItTab3";
import ItTab4 from "../ItConsultingTabs/ItTab4";
import ItTab5 from "../ItConsultingTabs/ItTab5";
import { useTranslations } from "next-intl";
const ItConsultingMain = () => {

  const t = useTranslations("itConsulting");

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
    <section className="itCons-main">
      <div className="itCons-main__container _container">
        <div className="itCons-main__body">
          <div className="itCons-main__tabs">
            <div className="tabsIt">

              {!isMobile && (
                <div className="tabsIt__nav">
                  <button
                    onClick={() => tabChange("tab1")}
                    className={`tabsIt__button ${activeTab == "tab1" ? "active" : ""}`}
                  >
                    {t("main.tab1", {}, "IT Strategy and Planning")}
                  </button>
                  <button
                    onClick={() => tabChange("tab2")}
                    className={`tabsIt__button ${activeTab == "tab2" ? "active" : ""}`}
                  >
                    {t("main.tab2", {}, "IT Infrastructure Management")}
                  </button>
                  <button
                    onClick={() => tabChange("tab3")}
                    className={`tabsIt__button ${activeTab == "tab3" ? "active" : ""}`}
                  >
                    {t("main.tab3", {}, "Software Development and Integration")}
                  </button>
                  <button
                    onClick={() => tabChange("tab4")}
                    className={`tabsIt__button ${activeTab == "tab4" ? "active" : ""}`}
                  >
                    {t("main.tab4", {}, "Data Management and Analytics")}
                  </button>
                  <button
                    onClick={() => tabChange("tab5")}
                    className={`tabsIt__button ${activeTab == "tab5" ? "active" : ""}`}
                  >
                    {t("main.tab5", {}, "IT Support and Maintenance")}
                  </button>
                </div>
              )}

              <div className="tabsIt__content">
                {isMobile ? (
                  <>
                    <ItTab1 />
                    <ItTab2 />
                    <ItTab3 />
                    <ItTab4 />
                    <ItTab5 />

                  </>
                ) : (
                  <>
                    {activeTab == "tab1" && <ItTab1 />}
                    {activeTab == "tab2" && <ItTab2 />}
                    {activeTab == "tab3" && <ItTab3 />}
                    {activeTab == "tab4" && <ItTab4 />}
                    {activeTab == "tab5" && <ItTab5 />}
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
