import AddExpense from "./components/AddExpense/AddExpense";
import Expenses from "./components/Expense/Expenses";

const App = () => {
  const expenses = [
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
      date: new Date(2022, 3, 3),
    },
    {
      id: "e4",
      title: "Mandatory Provident Fund",
      amount: 444.44,
      date: new Date(2022, 4, 4),
    },
  ];

  const addExpenseHandler = (addExpenseData) => {
    console.log(addExpenseData);
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
