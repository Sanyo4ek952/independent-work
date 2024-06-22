import React from 'react';
import s from './Counter/counter.module.css'

type ButtonProps = {
    colorValue?: boolean
    disabled?: boolean
    counterValue?: number
    dataCounterError?: boolean
    title: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void

}

export const Button = (props: ButtonProps) => {


    return (
        <button disabled={props.disabled || props.dataCounterError} onClick={(e) => props.onClick(e)}
                className={s.button}>
            {props.title}
        </button>
    );
};
