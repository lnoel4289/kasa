import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// scroll to the top of the browser window when changing route
export const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};
