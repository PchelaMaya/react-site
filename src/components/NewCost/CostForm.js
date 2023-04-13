import React, { useState } from 'react'
import './CostForm.css'
const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    //Лучше использовать следующий способ передачи состояния Input,
    //но в данном случае используются стр.функции ниже через несколько состояний
    // const nameChangeHandler = (event) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             name: event.target.value 
    //         }
    //     })
    // }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        //ниже коммуникация с компонентом NewCost
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');

    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input
                     type='text'
                     value={inputName} 
                     onChange={nameChangeHandler}
                    />
                </div> 
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input
                     type='number' 
                     value={inputAmount}
                     onChange={amountChangeHandler} 
                     min='0.01' 
                     step='0.01' 
                    />
                </div> 
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input
                     type='date' 
                     value={inputDate}
                     onChange={dateChangeHandler} 
                     min='2019-01-01' 
                     step='2023-12-31'
                    />
                </div> 
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                </div>
            </div>
        </form>
        )
}

export default CostForm;