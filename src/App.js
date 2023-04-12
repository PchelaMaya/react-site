import Costs from "./components/Costs/Costs";
const App = () => {
  const costs = [
    {
      date: new Date(2022, 8, 10),
      description: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2022, 8, 12),
      description: "Плита",
      amount: 799.99
    },
    {
      date: new Date(2022, 9, 14),
      description: "Стиральная машина",
      amount: 899.99
    },
  ];
  return (
    <div>
      <h1 className="title">Учёт трат</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
