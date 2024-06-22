import React, {useState} from 'react';
import s from './counter.module.css'
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {Buttons} from "../Buttons";

type CounterProps = {
    counter: number
    maxValueCounter: number
    setCounter: (counter: number) => void
    minValueCounter: number
    disabledDisplayCounter:boolean
}

export const Counter = (
    {
        counter,
        maxValueCounter,
        setCounter,
        minValueCounter,
        disabledDisplayCounter
    }: CounterProps) => {


    const counterIncButtonsHandler = () => {
        if (counter < maxValueCounter) {
            setCounter(counter + 1)
        }
    }
    const counterResButtonsHandler = () => {
        setCounter(minValueCounter)
    }

    return (
        <div className={s.counter}>
            <CounterDisplay
                disabledDisplayCounter={disabledDisplayCounter}
                maxValueCounter={maxValueCounter}
                minValueCounter={minValueCounter}
                counterValue={counter}/>
            <Buttons counterValue={counter}
                     disabledDisplayCounter={disabledDisplayCounter}
                     maxValueCounter={maxValueCounter}
                     minValueCounter={minValueCounter}
                     counterIncButtonsHandler={counterIncButtonsHandler}
                     counterResButtonsHandler={counterResButtonsHandler}/>
        </div>
    );
};
