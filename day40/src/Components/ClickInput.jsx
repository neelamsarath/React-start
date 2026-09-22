import React, { useState } from "react";

const ClickInput = () => {

    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");

    const handleClick = () => {
        setDisplay(input);
    };

    return (
        <div>
            <h1>Click Event</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your name"
            />

            <button onClick={handleClick}>
                Click Me
            </button>

            <h2>{display}</h2>
        </div>
    );
};

export default ClickInput;