import React from "react";
import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  const user = props.user;

  return (
    <li className={styles.item}>
      {user.userName} ({user.age} years old)
    </li>
  );
};

export default UserListItem;
