import { useState } from "react";

export default function DynamicStyleToggle() {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const toggleHighlight = () => {
        setIsHighlighted(!isHighlighted);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <p className={isHighlighted ? "highlighted" : "normal"}>
                This is a dynamically styled paragraph.
            </p>
            <button onClick={toggleHighlight} style={buttonStyle}>
                Toggle Highlight
            </button>

            <style>
                {`
          .highlighted {
            background-color: yellow; 
            text-decoration: underline;
            padding: 10px;
          }
          .normal {
            background-color: transparent;
            text-decoration: none;
          }
        `}
            </style>
        </div>
    );
}

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
};
