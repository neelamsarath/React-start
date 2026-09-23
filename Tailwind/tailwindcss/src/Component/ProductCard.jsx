const ProductCard = ({ image, name, price, rating }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {name}
                </h2>

                <p className="text-green-600 font-bold text-lg mt-2">
                    ₹{price}
                </p>

                <p className="text-yellow-500 mt-2">
                    ⭐ {rating}
                </p>

                <button
                    className="w-full bg-blue-600 text-white
                               py-2 mt-4 rounded-lg
                               hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
};

export default ProductCard;