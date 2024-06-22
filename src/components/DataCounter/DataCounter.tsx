import React from 'react';
import s from "../Counter/counter.module.css";
import {Button} from "../Button";
import {InputCounterValue} from "./Input/InputCounterValue";
import styled from "styled-components";

type DataCounterProps = {
    setMaxValueCounter: (value: number) => void;
    setMinValueCounter: (value: number) => void;
    setCounter: (counter: number) => void;
    setDisabledDisplayCounter: (value: boolean) => void;
    disabledDisplayCounter: boolean
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
        setDisabledDisplayCounter,
    }: DataCounterProps) => {

    const onChangeStarValueHandler = (value: number) => {
        setMinValueCounter(value)
        setDisabledDisplayCounter(true)

    }

    const error  = minValueCounter < 0 || minValueCounter >= maxValueCounter
    const onChangeMaxValueHandler = (value: number) => {
        setMaxValueCounter(value)
        setDisabledDisplayCounter(true)
    }


    const onClickButton = () => {
        setMinValueCounter(minValueCounter)
        setMaxValueCounter(maxValueCounter)
        setCounter(minValueCounter)
        setDisabledDisplayCounter(false)
    }

    return (
        <div className={s.counter}>
            {error ? <ErrorStyle>Некоректное значение</ErrorStyle> : ""}
            <InputCounterValue title={"start value"}
                               dataCounterError={error}
                               minValueCounter={minValueCounter}
                               onChange={onChangeStarValueHandler}/>
            <InputCounterValue title={"max value"}
                               dataCounterError={error}
                               maxValueCounter={maxValueCounter}
                               onChange={onChangeMaxValueHandler}/>
            <div className={s.counterButtons}>
                <Button title={"set"}
                        onClick={onClickButton}
                        dataCounterError={error}/>
            </div>
        </div>
    );
};


const ErrorStyle = styled.p`
    color: red;
    position: absolute;
    top: -40px;
    left: 0;
`