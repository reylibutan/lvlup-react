import Expenses from "./components/Expenses";

function App() {
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
      <h2>Let's get started! 222</h2>
      <br />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
