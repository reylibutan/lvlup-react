import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div
        className={styles.backdrop}
        onClick={() => {
          props.onOkayHandler();
        }}
      ></div>
      <div className={styles.modal}>
        <div className={styles.header}>{props.header}</div>
        <div className={styles.body}>{props.body}</div>
        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => {
              props.onOkayHandler();
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
