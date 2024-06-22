import React from 'react';
import s from "./counter.module.css";

type CounterDisplayProps = {
    counterValue:number
    maxCounter:number
}

export const CounterDisplay2 = (props:CounterDisplayProps) => {

    return (
        <div className={props.counterValue === props.maxCounter ? s.counterDisplayRed : s.counterDisplay}>
            {props.counterValue}
        </div>
    );
};

