import React, { useState, useEffect } from "react";

export default function LoadingSite() {
  const [fade, setFade] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Thêm class fade sau 1 giây
    const fadeTimeout = setTimeout(() => {
      setFade(true);
    }, 100);

    const showTimeout = setTimeout(() => {
      setShow(true);
    }, 500);
    
    const removeTimeoutShow = setTimeout(() => {
      setShow(false);
    }, 2000);
    
    const removeTimeoutFade = setTimeout(() => {
      setFade(false);
    }, 2600);

    // Cleanup function
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(showTimeout);
      clearTimeout(removeTimeoutFade);
      clearTimeout(removeTimeoutShow);
    };
  }, []);

  return (
    <div className={`page-loader ${fade ? "fade" : ""} ${show ? "show" : ""}`}>
      <div className="page-wipe"></div>
    </div>
  );
}
