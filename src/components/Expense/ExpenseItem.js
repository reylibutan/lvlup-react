import React, { useState } from "react";

import Card from "../Common/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let suffixCounter = 0;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(title + (suffixCounter + 1));
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
};

export default ExpenseItem;
