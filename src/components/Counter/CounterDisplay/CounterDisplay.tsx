import React from 'react';
import s from "../counter.module.css";
import styled from "styled-components";

type CounterDisplayProps = {
    counterValue: number
    maxValueCounter: number
    disabled: boolean
}

export const CounterDisplay = (
    {
        counterValue,
        maxValueCounter,
        disabled
    }: CounterDisplayProps) => {

    return (
        <CounterDisplayStyle counterValue={counterValue} maxValueCounter={maxValueCounter}
                             disabled={disabled}>
            {disabled ? "enter values and press 'set'" : counterValue}
        </CounterDisplayStyle>
    );
};


const CounterDisplayStyle = styled.div<CounterDisplayProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.disabled ? "grey" : "#08ecec"};
    border-radius: 10px;
    padding: 20px;
    min-height: 152px;
    box-sizing: border-box;
    font-size: ${props => props.disabled ? "22px" : 'transparent'};
    color: ${props => props.counterValue === props.maxValueCounter ? "red" : "black"};

`