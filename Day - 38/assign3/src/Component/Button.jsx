const Button = (props) => {

    const sizeStyles = {
        small: {
            padding: "5px 10px",
            fontSize: "12px"
        },

        medium: {
            padding: "10px 20px",
            fontSize: "16px"
        },

        large: {
            padding: "15px 30px",
            fontSize: "20px"
        }
    };

    return (
        <button
            style={{
                backgroundColor: props.color,
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                ...sizeStyles[props.size]
            }}
        >
            {props.children}
        </button>
    );
};

export default Button;