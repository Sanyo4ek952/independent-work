import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Counter2} from "./components/Counter2/Counter2";
import {DataCounter} from "./components/DataCounter/DataCounter";


function App() {
    const [counter, setCounter] = useState(0);

    const [maxValueCounter, setMaxValueCounter] = useState(5);
    const [minValueCounter, setMinValueCounter] = useState(0);

    const [disabled, setDisabled] = useState<boolean>(false);
    return (
        <div className="App">
            <Counter
                counter={counter}
                maxValueCounter={maxValueCounter}
                minValueCounter={minValueCounter}
                disabled={disabled}
                setCounter={setCounter}
                            />
            <DataCounter
                setMaxValueCounter={setMaxValueCounter}
                setMinValueCounter={setMinValueCounter}
                maxValueCounter={maxValueCounter}
                minValueCounter={minValueCounter}
                setCounter={setCounter}
                setDisabled={setDisabled}/>
            {/*<Counter2/>*/}
        </div>
    );
}

export default App;
