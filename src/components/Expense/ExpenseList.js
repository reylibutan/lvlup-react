import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  let content = <h2 className="expenses-list__fallback">No expenses found.</h2>;
  if (props.items.length > 0) {
    content = (
      <ul className="expenses-list">
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    );
  }

  return content;
}

export default ExpenseList;
