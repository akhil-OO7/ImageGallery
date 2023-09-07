import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { StateContext } from "../context/StateContextProvider";

const Popup = () => {
  const { show, data, setShow, scroll, setScroll } = useContext(StateContext);

  useEffect(() => {
    document.body.style.overflow = scroll ? "unset" : "hidden";
  }, [scroll]);

  if (!show) return null;
  return ReactDOM.createPortal(
    <>
      <div className="popup">
        <div className="popup-container">
          {data && <img src={data.urls.regular} />}
        </div>
        <span
          className="close-btn"
          onClick={() => {
            setShow(false);
            setScroll(true);
          }}
        >
          &times;
        </span>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
