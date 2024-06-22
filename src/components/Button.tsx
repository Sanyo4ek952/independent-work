import React from 'react';
import s from './Counter/counter.module.css'

type ButtonProps = {
    colorValue?: boolean
    disabled?: boolean
    counterValue?: number
    title: string
    onClick: () => void
}

export const Button = (props: ButtonProps) => {


    return (
        <button disabled={props.disabled} onClick={props.onClick} className={s.button}>
            {props.title}
        </button>
    );
};
