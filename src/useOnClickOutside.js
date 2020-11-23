import React, { useEffect } from "react";
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      console.log("event", event.target);
      console.log("REF", ref);
    };
    if (ref.current) {
      ref.current.addEventListener("mousedown", listener);
    }
  }, [ref, handler]);
};
export default useOnClickOutside;
