"use client";
import { useEffect, useState } from "react";

const ResponsiveCol = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return <div className="solutions-main__col-01">{children}</div>;
};

export default ResponsiveCol;