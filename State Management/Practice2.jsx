// Theme Switcher
// Create a button that toggles the background color of the page between light and dark themes.
import { useState } from 'react';

export default function App() {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div
            style={{
                height: '100vh',
                backgroundColor: isLightMode ? '#ffffff' : '#333333',
                color: isLightMode ? '#000000' : '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 0.5s, color 0.5s',
            }}
        >
            <h1>{isLightMode ? 'Light Theme' : 'Dark Theme'}</h1>
            <button
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: isLightMode ? '#333333' : '#ffffff',
                    color: isLightMode ? '#ffffff' : '#000000',
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
                Toggle Theme
            </button>
        </div>
    );
}