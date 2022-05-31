import React, { useState } from "react";

import Card from "../Common/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [suffixCounter, setSuffixCounter] = useState(0);
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setSuffixCounter(prevSuffixCounter => prevSuffixCounter + 1);
    setTitle(`${props.title} ${suffixCounter}`);
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
