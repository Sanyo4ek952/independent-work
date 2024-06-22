import React from 'react';
import styled from "styled-components";

type InputCounterValueProps = {
    title: string
    maxValueCounter?: number
    minValueCounter?: number
    onChange: (value: number) => void
}

export const InputCounterValue = (
    {
        title,
        onChange,
        maxValueCounter,
        minValueCounter,
    }: InputCounterValueProps) => {

    return (
        <InputCounterValueContainer>
            <div>{title}</div>
            <input value={maxValueCounter ? maxValueCounter : minValueCounter}

                   onChange={(e) => onChange(Number(e.currentTarget.value))} type="number"/>
        </InputCounterValueContainer>
    );
};


const InputCounterValueContainer = styled.div`
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    color: #61dafb;

    & input {
        flex: 0 0 100px;
        width: 200px;
        text-align: center;
        border-radius: 8px;
    }
`