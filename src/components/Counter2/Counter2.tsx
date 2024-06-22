import React, {useState} from 'react';
import s from './counter.module.css'
import {CounterDisplay2} from "./CounterDisplay2";
import {Buttons2} from "./Buttons2";
import {ProgressBar} from "./ProgresBar";


export const Counter2 = () => {
    const [counter, setCounter] = useState<number>(0);

    const [maxCounter, setMaxCounter] = useState<number>(5);


    const counterIncButtonsHandler = () => {
        if (counter <= maxCounter) {
            setCounter(counter + 1)
        }
    }
    const maxCounterValue = 10
    const minCounterValue = 1
    const counterResButtonsHandler = () => {
        setCounter(0)
        setMaxCounter(Math.round(Math.random() * (maxCounterValue-minCounterValue)))
    }

    return (
        <div className={s.counter}>
            <CounterDisplay2 maxCounter={maxCounter}
                counterValue={counter}/>
            <ProgressBar maxCounter={maxCounter}
                counterValue={counter}/>
            <Buttons2 maxCounter={maxCounter}
                counterValue={counter}
                     counterIncButtonsHandler={counterIncButtonsHandler}
                     counterResButtonsHandler={counterResButtonsHandler}/>
        </div>
    );
};
