import React, { useState } from "react";
import Card from "../Common/Card/Card";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";
import Modal from "../Common/Modal/Modal";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const isNullOrEmpty = (val) => {
    return val === null || val === "";
  };

  const onOkayHandler = () => {
    setErrorMessage(null);
  };

  const onNewUserHandler = (newUser) => {
    const userName = newUser.userName;
    const age = newUser.age;

    // validate
    if (isNullOrEmpty(userName) || isNullOrEmpty(age)) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
    } else if (age <= 0) {
      setErrorMessage("Please enter a valid age (> 0).");
    } else {
      setUsers((oldUsers) => {
        return [newUser, ...oldUsers];
      });
    }
  };

  return (
    <div className={styles["users-wrapper"]}>
      <Card>
        <UserForm onNewUserHandler={onNewUserHandler} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
      {!isNullOrEmpty(errorMessage) && (
        <Modal
          header={"Invalid Input"}
          body={errorMessage}
          onOkayHandler={onOkayHandler}
        />
      )}
    </div>
  );
};

export default Users;
