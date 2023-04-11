import CostItem from "./components/CostItem";

function App() {

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
      <CostItem 
        date={costs[0].date} 
        description={costs[0].description} 
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date} 
        description={costs[1].description} 
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date} 
        description={costs[2].description} 
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
