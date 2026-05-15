import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PtConversionTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/pt" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18166015064/QUq_CLnh8K0cENjIndZD",
        value: 1.0,
        currency: "BRL",
      });
    }
  }, [location.pathname]);

  return null;
};

export default PtConversionTracker;