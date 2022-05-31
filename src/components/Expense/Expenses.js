import React, { useState } from "react";
import Card from "../Common/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
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

      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
