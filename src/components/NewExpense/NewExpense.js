import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormMode, setIsFormMode] = useState(false);

  const onClickAddExpenseHandler = () => {
    setIsFormMode(true);
  };

  const expenseFormCancelHandler = () => {
    setIsFormMode(false);
  };

  const expenseFormSubmitHandler = (expenseFormData) => {
    const newExpenseData = { id: Math.random().toString(), ...expenseFormData };
    props.onNewExpense(newExpenseData);
    setIsFormMode(false);
  };

  let content = (
    <button type="button" onClick={onClickAddExpenseHandler}>
      Add New Expense
    </button>
  );

  if (isFormMode) {
    content = (
      <ExpenseForm
        onExpenseFormSubmit={expenseFormSubmitHandler}
        onExpenseFormCancel={expenseFormCancelHandler}
        onToggleIsFormModeHandler={onClickAddExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
