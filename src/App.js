import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 8, 10),
      description: "Холодильник",
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date(2022, 8, 12),
      description: "Плита",
      amount: 799.99
    },
    {
      id: 'c3',
      date: new Date(2022, 9, 14),
      description: "Стиральная машина",
      amount: 899.99
    },
  ];

  const addCostHandler = (cost) => {

  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
