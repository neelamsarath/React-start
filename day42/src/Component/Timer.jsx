import React, { useState, useEffect } from "react";

const Timer = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 5000);

        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <div>
            <h1>Timer</h1>
            <h2>{count}</h2>
        </div>
    );
};

export default Timer;