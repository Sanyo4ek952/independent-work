import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {DataCounter} from "./components/DataCounter/DataCounter";


function App() {
    const [counter, setCounter] = useState(0);

    const [maxValueCounter, setMaxValueCounter] = useState(5);
    const [minValueCounter, setMinValueCounter] = useState(0);

    useEffect(()=>{
            const valueMax = localStorage.getItem('maxValue')
            if(valueMax){
                let newValueMax = JSON.parse(valueMax)
                setMaxValueCounter(newValueMax)
        }

    },[])
    useEffect(()=>{
        localStorage.setItem('maxValue',JSON.stringify(maxValueCounter) )
    }, [maxValueCounter])

    useEffect(()=>{
        const valueMin = localStorage.getItem('minValue')
        if(valueMin){
            let newValueMin = JSON.parse(valueMin)
            setMinValueCounter(newValueMin)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('minValue',JSON.stringify(minValueCounter) )
    }, [minValueCounter])


    const [disabledDisplayCounter, setDisabledDisplayCounter] = useState<boolean>(false);
    return (
        <div className="App">
            <Counter
                counter={counter}
                maxValueCounter={maxValueCounter}
                minValueCounter={minValueCounter}
                disabledDisplayCounter={disabledDisplayCounter}
                setCounter={setCounter}
            />
            <DataCounter
                setMaxValueCounter={setMaxValueCounter}
                setMinValueCounter={setMinValueCounter}
                maxValueCounter={maxValueCounter}
                minValueCounter={minValueCounter}
                setCounter={setCounter}
                disabledDisplayCounter={disabledDisplayCounter}
                setDisabledDisplayCounter={setDisabledDisplayCounter}/>
            {/*<Counter2/>*/}
        </div>
    );
}

export default App;
