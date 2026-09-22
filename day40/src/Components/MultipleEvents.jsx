import React, { useState } from "react";

const MultipleEvents = () => {

    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Button clicked");
    };

    const handleDoubleClick = () => {
        setMessage("Button double clicked");
    };

    const handleMouseOver = () => {
        setMessage("Mouse is over the button");
    };

    return (
        <div>
            <h1>Multiple Events</h1>

            <button
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onMouseOver={handleMouseOver}
            >
                Try Events
            </button>

            <h2>{message}</h2>
        </div>
    );
};

export default MultipleEvents;