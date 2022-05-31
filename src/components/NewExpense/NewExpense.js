import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseFormSubmitHandler = (expenseFormData) => {
    const newExpenseData = { id: Math.random().toString(), ...expenseFormData };
    props.onNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
