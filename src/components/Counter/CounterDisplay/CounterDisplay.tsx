import React from 'react';
import styled from "styled-components";

type CounterDisplayProps = {
    counterValue: number
    maxValueCounter: number
    minValueCounter: number
    disabledDisplayCounter: boolean
}

export const CounterDisplay = (
    {
        counterValue,
        maxValueCounter,
        disabledDisplayCounter,
        minValueCounter
    }: CounterDisplayProps) => {
    if (minValueCounter >= maxValueCounter || minValueCounter < 0 || maxValueCounter > minValueCounter && minValueCounter < 0) {
        return (
            <CounterDisplayStyle minValueCounter={minValueCounter} counterValue={counterValue}
                                 maxValueCounter={maxValueCounter}
                                 disabledDisplayCounter={disabledDisplayCounter}
            error>
                Error
            </CounterDisplayStyle>
        );
    } else {
        return (
            <CounterDisplayStyle minValueCounter={minValueCounter} counterValue={counterValue}
                                 maxValueCounter={maxValueCounter}
                                 disabledDisplayCounter={disabledDisplayCounter}>
                {disabledDisplayCounter ? "enter values and press 'set'" : counterValue}

            </CounterDisplayStyle>
        );
    }

};

type CounterDisplayStyleProps = {
    counterValue: number
    maxValueCounter: number
    minValueCounter: number
    disabledDisplayCounter: boolean
    error?:boolean
}

const CounterDisplayStyle = styled.div<CounterDisplayStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.disabledDisplayCounter ? "grey" : "#08ecec"};
    border-radius: 10px;
    padding: 20px;
    min-height: 152px;
    box-sizing: border-box;
    font-size: ${props => props.disabledDisplayCounter ? "22px" : '84px'};
    color: ${props => props.counterValue === props.maxValueCounter || props.error ? "red" : "black"};

`