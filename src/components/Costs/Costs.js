import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from './CostsFilter'
import React, { useState } from 'react';
import CostsList from './CostsList';
import Diagram from '../Diagram/Diagram';

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
    
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    //отображение данных в зависимости от выбранной даты
    const filteredCosts = props.costs.filter((cost) => 
    {
        return cost.date.getFullYear().toString() === selectedYear;
    })


    return (
    <div>
        <Card className='costs'>
            <CostsFilter
                year={selectedYear} 
                onChangeYear={yearChangeHandler}
            />
            <CostsList costs={filteredCosts}/>
        </Card>
    </div>
    );
}
export default Costs;