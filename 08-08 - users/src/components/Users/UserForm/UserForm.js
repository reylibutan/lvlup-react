import React, { useRef } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const clearForm = () => {
    nameInputRef.current.value = ""
    ageInputRef.current.value = ""
  };

  const onSubmitHandler = (event) => {
    const newUser = {
      id: Math.random() * 100,
      userName: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    props.onNewUserHandler(newUser);
    clearForm();

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label>Username</label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div className={styles.control}>
          <label>Age (Years)</label>
          <input type="number" ref={ageInputRef} />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
