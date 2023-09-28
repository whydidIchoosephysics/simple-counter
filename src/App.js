import React, { useState } from 'react';
import MyButton from './components/MyButton';
import MyCard from './components/MyCard';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <header className="App-header">
                <MyCard
                    count={count}
                    handleReset={handleReset}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement} />
            </header>

            <div className="button-container">

                <MyButton variant="danger" onClick={handleDecrement}>Decrement</MyButton>
                <MyButton variant="success" onClick={handleIncrement}>Increment</MyButton>
            </div>
        </div>
    );
}

export default App;
