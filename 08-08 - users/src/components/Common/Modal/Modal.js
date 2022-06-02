import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const BaseModal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.body}>{props.body}</div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onOkayHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={() => {
            props.onOkayHandler();
          }}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <BaseModal
          header={props.header}
          body={props.body}
          onOkayHandler={() => {
            props.onOkayHandler();
          }}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
