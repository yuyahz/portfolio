import React, { useEffect } from "react";

const TouchStartListener = () => {
  useEffect(() => {
    const handleTouchStart = () => {};
    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);
  return null;
};

export default TouchStartListener;
