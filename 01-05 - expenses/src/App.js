import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Food and Transportation",
    amount: 111.11,
    date: new Date(2022, 1, 1),
  },
  {
    id: "e2",
    title: "Income Tax",
    amount: 222.22,
    date: new Date(2022, 2, 2),
  },
  {
    id: "e3",
    title: "Apartment Rental",
    amount: 333.33,
    date: new Date(2021, 3, 3),
  },
  {
    id: "e4",
    title: "Mandatory Provident Fund",
    amount: 444.44,
    date: new Date(2020, 4, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const newExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => [newExpenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
