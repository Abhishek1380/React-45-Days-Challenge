// Timer App
// Create a timer that starts at 0 and increments by 1 every second. Add buttons to start, stop, and reset the timer.
import { useState, useEffect } from 'react';

export default function TimerApp() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(intervalId);
    };

    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(intervalId);
        setTime(0);
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Timer: {time} seconds</h1>
            <button onClick={startTimer} disabled={isRunning} style={buttonStyle}>
                Start
            </button>
            <button onClick={stopTimer} disabled={!isRunning} style={buttonStyle}>
                Stop
            </button>
            <button onClick={resetTimer} style={buttonStyle}>
                Reset
            </button>
        </div>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
};