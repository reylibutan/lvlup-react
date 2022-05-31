import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  const expenseFormSubmitHandler = (expenseFormData) => {
    const addExpenseData = { ...expenseFormData, id: Math.random().toString() };
    props.onAddExpense(addExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler} />
    </div>
  );
};

export default AddExpense;
