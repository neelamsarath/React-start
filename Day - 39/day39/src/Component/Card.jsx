import React from "react";

const Card = (props) => {
    return (
        <div className="card">

            <h2>{props.title}</h2>

            <div className="card-content">
                {props.children}
            </div>

            <p className="card-footer">
                {props.footer}
            </p>

        </div>
    );
};

export default Card;