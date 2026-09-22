import React, { useState } from "react";

const Result = () => {

    const [marks, setMarks] = useState(75);

    let result;

    if (marks >= 90 && marks <= 100) {
        result = "Excellent";
    }
    else if (marks >= 60 && marks <= 89) {
        result = "Passed";
    }
    else if (marks >= 40 && marks <= 59) {
        result = "Needs Improvement";
    }
    else {
        result = "Failed";
    }

    return (
        <div>
            <h1>Student Result</h1>
            <h2>Marks: {marks}</h2>
            <h2>Result: {result}</h2>
        </div>
    );
};

export default Result;