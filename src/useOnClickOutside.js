import { useEffect } from "react";
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      console.log("event", event.target);
      console.log("REF", ref);
      if (ref.current.contains(event.target)) {
        console.log("HEY");
      } else {
        handler();
      }
    };
    if (ref.current) {
      document.addEventListener("mousedown", listener);
    }
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });
};
export default useOnClickOutside;
