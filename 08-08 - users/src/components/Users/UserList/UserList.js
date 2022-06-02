import React from "react";
import UserListItem from "../UserListItem/UserListItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const users = props.users;

  let content = null;
  if (users.length > 0) {
    content = (
      <ul className={styles.list}>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    );
  } else {
    content = <h3 style={{ textAlign: "center" }}>No Users added yet</h3>;
  }

  return content;
};

export default UserList;
