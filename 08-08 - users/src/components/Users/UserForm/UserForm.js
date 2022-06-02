import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const clearForm = () => {
    setUserName("");
    setAge("");
  };

  const onSubmitHandler = (event) => {
    const newUser = {
      id: Math.random() * 100,
      userName: userName,
      age: age,
    };

    props.onNewUserHandler(newUser)
    clearForm();

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className={styles.control}>
          <label>Age (Years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
