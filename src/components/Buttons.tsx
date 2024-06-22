import React from 'react';
import s from './Counter/counter.module.css'
import {Button} from "./Button";

type ButtonProps = {
    counterValue: number
    minValueCounter: number
    maxValueCounter: number
    counterIncButtonsHandler: () => void
    counterResButtonsHandler: () => void
}

export const Buttons = (
    {
        counterValue,
        minValueCounter,
        maxValueCounter,
        counterResButtonsHandler,
        counterIncButtonsHandler
    }: ButtonProps) => {
    return (
        <div className={s.counterButtons}>
            <Button
                title={'inc'}
                disabled={maxValueCounter === counterValue}
                onClick={counterIncButtonsHandler}
            />
            <Button
                title={'reset'}
                disabled={counterValue === minValueCounter}
                onClick={counterResButtonsHandler}/>
        </div>
    );
};
