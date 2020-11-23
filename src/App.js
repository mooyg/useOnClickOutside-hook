import React, { useRef, useState } from "react";
import "./styles.css";
import Modal from "react-awesome-modal";
import useOnClickOutisde from "./useOnClickOutside";
export default function App() {
  const [isOpen, setisOpen] = useState(false);
  const modalRef = useRef(null);
  const handleClick = () => {
    isOpen ? setisOpen(false) : setisOpen(true);
  };
  useOnClickOutisde(modalRef, () => setisOpen(false));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={handleClick}> Trigger</button>
      <h2>Start editing to see some magic happen!</h2>
      {isOpen && (
        <div className="modal" ref={modalRef}>
          <h2>THIS IS A MODAL </h2>
          <p>TRY TO CLICK OUTSIDE</p>
        </div>
      )}
    </div>
  );
}
