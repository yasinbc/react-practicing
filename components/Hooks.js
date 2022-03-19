import React, {useState} from 'react';

const Hooks = () => {
    const initialCount = () => {
        console.log("runs Count Once")
        return 4
    }

    const themeT = () => {
        console.log("runs Theme Once")
        return 'black'
    }
    
    const [count, setCount] = useState(() => initialCount());
    const [theme, setTheme] = useState(() => themeT());
    
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
        setTheme('blue')
    }

    const incrementCount = () => {
        setCount(nextCount => nextCount + 1)
        setTheme('red')
    }
    
    return (
        <div className="container">
            <button onClick={decrementCount} className="btn btn-primary btn-lg"> - </button>
            <span> {count} </span>
            <span> {theme} </span>
            <button onClick={incrementCount} className="btn btn-primary btn-lg"> + </button>
        </div>
    );
}

export default Hooks;