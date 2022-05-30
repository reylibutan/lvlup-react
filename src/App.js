import AddExpense from "./components/AddExpense/AddExpense";
import Expenses from "./components/Expense/Expenses";

const App = () => {
  const expenses = [
    {
      title: "Food and Transportation",
      amount: 111.11,
      date: new Date(2022, 1, 1),
    },
    { title: "Income Tax", amount: 222.22, date: new Date(2022, 2, 2) },
    { title: "Apartment Rental", amount: 333.33, date: new Date(2022, 3, 3) },
    {
      title: "Mandatory Provident Fund",
      amount: 444.44,
      date: new Date(2022, 4, 4),
    },
  ];

  return (
    <div>
      <AddExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
