import React, {ButtonHTMLAttributes} from 'react';
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
        disabledDisplayCounter,
    }: DataCounterProps) => {
    const [dataCounterError, setDataCounterError] = React.useState(false)


    const onChangeStarValueHandler = (value: number) => {
        setMinValueCounter(value)
        setDisabledDisplayCounter(true)
        if (minValueCounter > maxValueCounter) {
            setDataCounterError(true)
        }
        if (minValueCounter < 0) {
            setDataCounterError(true)
        }
        if (maxValueCounter > minValueCounter && minValueCounter > 0) {
            setDataCounterError(false)
        }
    }

    const error  = minValueCounter < 0 || minValueCounter > maxValueCounter || (maxValueCounter > minValueCounter && minValueCounter > 0)
    const onChangeMaxValueHandler = (value: number) => {
        setMaxValueCounter(value)
        setDisabledDisplayCounter(true)
        if (minValueCounter > maxValueCounter) {
            setDataCounterError(true)
        }
        if (minValueCounter < 1) {
            setDataCounterError(true)
        }
        if (maxValueCounter > minValueCounter && minValueCounter > 0) {
            setDataCounterError(false)
        }
    }


    const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMinValueCounter(minValueCounter)
        setMaxValueCounter(maxValueCounter)
        setCounter(minValueCounter)
        setDisabledDisplayCounter(false)
    }

    return (
        <div className={s.counter}>
            {error ? <ErrorStyle>Некоректное значение</ErrorStyle> : ""}
            <InputCounterValue title={"start value"}
                               dataCounterError={dataCounterError}
                               minValueCounter={minValueCounter}
                               onChange={onChangeStarValueHandler}/>
            <InputCounterValue title={"max value"}
                               dataCounterError={dataCounterError}
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