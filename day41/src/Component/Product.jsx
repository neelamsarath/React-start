import React, { useState } from "react";

const Product = () => {

    const [product, setProduct] = useState({
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    });

    const changeProduct = () => {

        setProduct({
            name: "Mobile Phone",
            price: 25000,
            category: "Smartphone"
        });

    };

    return (
        <div>
            <h1>Product Information</h1>

            <p>Product Name: {product.name}</p>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>

            <button onClick={changeProduct}>
                Change Product
            </button>
        </div>
    );
};

export default Product;