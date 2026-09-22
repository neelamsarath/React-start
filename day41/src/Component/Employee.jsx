import React, { useState } from "react";

const Employee = () => {

    const [empid, setEmpid] = useState(101);
    const [empname, setEmpname] = useState("Sarath");
    const [salary, setSalary] = useState(50000);
    const [desg, setDesg] = useState("Developer");
    const [deptno, setDeptno] = useState(10);

    return (
        <div>
            <h1>Employee Details</h1>

            <p>Employee ID: {empid}</p>
            <p>Employee Name: {empname}</p>
            <p>Salary: ₹{salary}</p>
            <p>Designation: {desg}</p>
            <p>Department Number: {deptno}</p>
        </div>
    );
};

export default Employee;