import React from "react";

const PassValue = () => {

    const handleClick = (name) => {
        alert("Hello " + name);
    };

    return (
        <div>
            <h1>Passing Value to Event</h1>

            <button onClick={() => handleClick("Sarath")}>
                Click Me
            </button>
        </div>
    );
};

export default PassValue;