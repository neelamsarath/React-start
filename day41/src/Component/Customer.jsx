import React, { useState } from "react";

const Customer = () => {

    const [customers, setCustomers] = useState([
        "Sarath",
        "Arun",
        "Rahul"
    ]);

    const [newCustomer, setNewCustomer] = useState("");

    const addCustomer = () => {

        if (newCustomer.trim() !== "") {
            setCustomers([...customers, newCustomer]);
            setNewCustomer("");
        }

    };

    const deleteCustomer = (index) => {

        const updatedCustomers = customers.filter(
            (_, i) => i !== index
        );

        setCustomers(updatedCustomers);

    };

    return (
        <div>

            <h1>Customer List</h1>

            <input
                type="text"
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                placeholder="Enter customer name"
            />

            <button onClick={addCustomer}>
                Add Customer
            </button>

            <ul>

                {customers.map((customer, index) => (

                    <li key={index}>

                        {customer}

                        <button onClick={() => deleteCustomer(index)}>
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default Customer;