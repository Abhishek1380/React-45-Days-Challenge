// 3. Input Field and State
// Create a form with a single input field. As the user types, update and display the entered text below the input field in real-time.

import { useState } from 'react';
export default function App() {
    const [text, setText] = useState(" ");

    const handleInput = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleInput} />
            <p>{text}</p>

        </div>
    )
}