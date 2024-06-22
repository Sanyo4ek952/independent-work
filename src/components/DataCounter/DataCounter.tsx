import React from 'react';
import s from "../Counter/counter.module.css";
import {Button} from "../Button";
import {InputCounterValue} from "./Input/InputCounterValue";

type DataCounterProps = {
    setMaxValueCounter: (value: number) => void;
    setMinValueCounter: (value: number) => void;
    setCounter: (counter: number) => void;
    setDisabled: (value :boolean) => void;
    maxValueCounter: number
    minValueCounter: number
}

export const DataCounter = (
    {
        setMaxValueCounter,
        maxValueCounter,
        minValueCounter,
        setMinValueCounter,
        setCounter,
        setDisabled,
    }: DataCounterProps) => {
const [dataCounterError, setDataCounterErrormsetDataCounter] = React.useState('')

    const onChangeStarValueHandler = (value: number) => {
        setMinValueCounter(value)
        setDisabled(true)
    }
    const onChangeMaxValueHandler = (value: number) => {
        setMaxValueCounter(value)
        setDisabled(true)
    }



    const onClickButton = () => {
        setMinValueCounter(minValueCounter)
        setMaxValueCounter(maxValueCounter)
        setCounter(minValueCounter)
        setDisabled(false)

    }

    return (
        <div className={s.counter}>
            <InputCounterValue title={"start value"}
                               minValueCounter={minValueCounter}
                               onChange={onChangeStarValueHandler}/>
            <InputCounterValue title={"max value"}
                               maxValueCounter={maxValueCounter}
                               onChange={onChangeMaxValueHandler}/>
            <div className={s.counterButtons}>
                <Button title={"set"} onClick={onClickButton}/>
            </div>
        </div>
    );
};
