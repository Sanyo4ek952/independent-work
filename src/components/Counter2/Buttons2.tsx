import React from 'react';
import s from './counter.module.css'
import {Button2} from "./Button2";

type ButtonProps = {
    counterValue:number
    counterIncButtonsHandler: () => void
    counterResButtonsHandler:()=>void
    maxCounter:number
}

export const Buttons2 = (props:ButtonProps) => {
    return (
        <div className={s.counterButtons}>
            <Button2  onClick={props.counterIncButtonsHandler} disabled={props.counterValue === props.maxCounter} title={'inc'}/>
            <Button2 counterValue={props.counterValue} disabled={props.counterValue === 0}  onClick={props.counterResButtonsHandler} title={'reset'}/>
        </div>
    );
};
