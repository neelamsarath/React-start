import React, { useState } from "react";

const UserInput = () => {

    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");

    const handleSubmit = () => {
        setDisplay(input);
    };

    return (
        <div>
            <h1>User Input</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter something"
            />

            <button onClick={handleSubmit}>
                Submit
            </button>

            <h2>{display}</h2>
        </div>
    );
};

export default UserInput;