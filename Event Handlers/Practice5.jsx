
// 5. Mouse Events
// Create a button that changes its text to "Mouse Over" when hovered and back to "Hover Me" when the mouse leaves.

import React, { useState } from "react";

const MouseEvents = () => {
    const [buttonText, setButtonText] = useState("Hover Me");

    const handleMouseOver = () => {
        setButtonText("Mouse Over");
    };

    const handleMouseLeave = () => {
        setButtonText("Hover Me");
    };

    return (
        <div>
            <h1>Mouse Events Example</h1>
            <button
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default MouseEvents;
