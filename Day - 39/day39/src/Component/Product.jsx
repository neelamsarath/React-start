import React from "react";

const Product = () => {

    const isAvailable = true;

    return (
        <div>
            <h1>Mobile Phone</h1>

            {isAvailable && <p>Available Now</p>}
        </div>
    );
};

export default Product;