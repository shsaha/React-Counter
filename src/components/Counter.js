import React from 'react';

const Counter = (props) => {

    const { count, increaseCount, decreaseCount, reset } = props
    return (
        < React.Fragment >
            <h3>Counter:{count}</h3>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={reset}>Reset</button>
        </React.Fragment >
    )
}

export default Counter;