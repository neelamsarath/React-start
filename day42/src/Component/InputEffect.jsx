import React, { useState, useEffect } from "react";

const InputEffect = () => {

    const [input, setInput] = useState("");

    useEffect(() => {
        console.log("Input changed:", input);
    }, [input]);

    return (
        <div>
            <h1>Input Effect</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something"
            />

            <p>You typed: {input}</p>
        </div>
    );
};

export default InputEffect;