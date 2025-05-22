"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function LangChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const localeName = locale.toUpperCase();

  const handleChange = (locale) => {
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="lang-changer">
      <button onClick={handleToggle} className="lang-changer__item-label">
        <Image
          src={`/images/${localeName}.svg`}
          alt={locale}
          width={24}
          height={24}
        />
      </button>
      {isOpen && (
        <div className="lang-changer__dropdown">
          <button
            onClick={() => handleChange("en")}
            className="lang-changer__dropdown-item"
          >
            <Image src={`/images/EN.svg`} alt={"en"} width={24} height={24} />
            English
          </button>
          <button
            onClick={() => handleChange("de")}
            className="lang-changer__dropdown-item"
          >
            <Image src={`/images/DE.svg`} alt={"de"} width={24} height={24} />
            German
          </button>
          <button
            onClick={() => handleChange("it")}
            className="lang-changer__dropdown-item"
          >
            <Image src={`/images/IT.svg`} alt={"it"} width={24} height={24} />
            Italian
          </button>
        </div>
      )}
    </div>
  );
}
