// 6. Toggle State
// Create a button that toggles between "On" and "Off" every time it is clicked. Also, change the background color based on the state.


import React, { useState } from "react";

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button
                onClick={handleToggle}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: isOn ? "green" : "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                {isOn ? "On" : "Off"}
            </button>
        </div>
    );
};

export default ToggleButton;
