import React from 'react';
import s from './counter.module.css'
import styled from "styled-components";

type ProgressBarStyleProps = {
    width: number;
    maxCounter:number
}

type ProgressBarProps = {
    counterValue: number
    maxCounter:number
}

export const ProgressBar = (props: ProgressBarProps) => {

    return (
        <div className={s.progressBar}>
            <ProgressBarStyle width={props.counterValue} maxCounter={props.maxCounter} className={s.progressBarValue}></ProgressBarStyle>
        </div>
    );
};


const ProgressBarStyle = styled.div<ProgressBarStyleProps>`
    background-color: #39e658;
    height: 100%;
    width: ${props => {
        if (props.width === 0) {
            return 0 + "px"
        } else {
            let result = props.width * 100 / props.maxCounter + "%"
            return result
        }

    }};

`