import React, { useState, useEffect } from "react";

const App = () => {
    const sayHello = () => console.log("HELLO");

    const [number, setNumber] = useState(0);
    const [aNumber, setANumber] = useState(0);

    // componentDidMount, componentDidUpdate 역할을 동시에 수행
    // useEffect(() => {
    //     sayHello();
    // })
    useEffect(sayHello, [number]);

    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setNumber(number + 1)}> { number } </button>
            <button onClick={() => setANumber(aNumber + 1)}> { aNumber } </button>
        </div>
    )
}

export default App;