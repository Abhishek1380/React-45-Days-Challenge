// Simple To-Do List
// Create an input field and a button. When the button is clicked, add the input value to a list displayed on the screen.

import { useState } from 'react';

export default function App() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div>
            <h1>Simple To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
}