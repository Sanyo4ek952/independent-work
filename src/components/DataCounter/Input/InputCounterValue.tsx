import React from 'react';
import styled from "styled-components";

type InputCounterValueProps = {
    title: string
    maxValueCounter?: number
    minValueCounter?: number
    dataCounterError: boolean
    onChange: (value: number) => void
}

export const InputCounterValue = (
    {
        title,
        onChange,
        maxValueCounter,
        minValueCounter,
        dataCounterError,
    }: InputCounterValueProps) => {




    return (
        <InputCounterValueContainer dataCounterError={dataCounterError}>
            <div>{title}</div>
            <input  className={` defaultClass classAnother ${maxValueCounter ? 'maxValueCounter' : maxValueCounter ?  'minValueCounter': ''}`} value={maxValueCounter ? maxValueCounter : minValueCounter}

                   onChange={(e) => onChange(Number(e.currentTarget.value))} type="number"/>
        </InputCounterValueContainer>
    );
};

type InputCounterValueContainerProps = {
    dataCounterError: boolean
}

const InputCounterValueContainer = styled.div<InputCounterValueContainerProps>`
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    color: #61dafb;

    & input {
        flex: 0 0 100px;
        width: 200px;
        text-align: center;
        border-radius: 8px;
        background-color: ${props => props.dataCounterError ? "rgba(239,45,52,0.55)" : "white"};

`