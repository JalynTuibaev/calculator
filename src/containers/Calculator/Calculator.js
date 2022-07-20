import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Calculator.css';

const Calculator = () => {
    const NUMBERS = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 0];
    const SYMBOLS = ['+', '-', '*', '/'];

    const sum = useSelector(state => state.sum);
    const dispatch = useDispatch();

    const onClickBtn = (e) => dispatch({type: 'NUMBER', payload: e.target.innerText});
    const getSum = () => dispatch({type: 'SUM'});

    return (
        <div className='calculator'>
            <div className='calculator__total'>{sum ? sum: 0}</div>
            <div className='calculator__inner'>
                <div className='calculator__left'>
                    {NUMBERS.map(number => {
                        if (number === 0) {
                            return <button key={number} onClick={onClickBtn} className='calculator__buttons last'>{number}</button>
                        }

                        return <button key={number} onClick={onClickBtn} className='calculator__buttons'>{number}</button>
                    })}
                </div>
                <div className='calculator__right'>
                    {SYMBOLS.map(symbol => <button key={symbol} onClick={onClickBtn} className='calculator__buttons'>{symbol}</button>)}
                </div>
            </div>
            <div className='calculator__bottom'>
                <button onClick={onClickBtn} className='calculator__buttons bottom'>DEL</button>
                <button onClick={onClickBtn} className='calculator__buttons bottom'>C</button>
                <button onClick={getSum} className='calculator__buttons bottom'>=</button>
            </div>
        </div>
    );
};

export default Calculator;