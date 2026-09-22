import React, { useState } from "react";

const BlurInput = () => {

    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");

    const handleBlur = () => {
        setDisplay(input);
    };

    return (
        <div>
            <h1>Blur Event</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your name"
            />

            <h2>{display}</h2>
        </div>
    );
};

export default BlurInput;