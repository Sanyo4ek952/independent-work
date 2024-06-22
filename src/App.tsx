import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {DataCounter} from "./components/DataCounter/DataCounter";


function App() {
    const [counter, setCounter] = useState(0);

    const [maxValueCounter, setMaxValueCounter] = useState(5);
    const [minValueCounter, setMinValueCounter] = useState(0);

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
