// Dynamic CSS Class
//  Create a button that toggles a paragraph's font color and size dynamically using CSS classes.

import { useState } from 'react';

export default function DynamicCSSClass() {
    const [isActive, setIsActive] = useState(false);

    const toggleStyle = () => {
        setIsActive(!isActive);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <p className={isActive ? 'active' : 'inactive'}>
                This is a dynamically styled paragraph.
            </p>
            <button onClick={toggleStyle} style={buttonStyle}>
                Toggle Style
            </button>

            <style>
                {`
          .active {
            color: #3498db;  /* Blue color */
            font-size: 20px;
            font-weight: bold;
          }
          .inactive {
            color: #2c3e50;  /* Dark color */
            font-size: 16px;
            font-weight: normal;
          }
        `}
            </style>
        </div>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
};