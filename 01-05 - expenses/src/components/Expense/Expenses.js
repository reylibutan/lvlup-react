import React, { useState } from "react";
import Card from "../Common/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const onChangeFilterHandler = (expenseFilterData) => {
    setSelectedYear(expenseFilterData.year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onExpenseFilterChange={onChangeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
