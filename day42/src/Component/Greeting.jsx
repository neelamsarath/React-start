import React, { useEffect } from "react";

const Greeting = () => {

    useEffect(() => {
        console.log("Welcome to React!");
    }, []);

    return (
        <div>
            <h1>Greeting Component</h1>
            <p>Welcome to the world of React.</p>
        </div>
    );
};

export default Greeting;