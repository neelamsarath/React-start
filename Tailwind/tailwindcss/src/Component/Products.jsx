import ProductCard from "./ProductCard";

const Products = () => {

    const products = [
        {
            image: "https://picsum.photos/400/300?random=1",
            name: "Laptop",
            price: 55000,
            rating: 4.5
        },
        {
            image: "https://picsum.photos/400/300?random=2",
            name: "Smartphone",
            price: 25000,
            rating: 4.3
        },
        {
            image: "https://picsum.photos/400/300?random=3",
            name: "Headphones",
            price: 2500,
            rating: 4.6
        },
        {
            image: "https://picsum.photos/400/300?random=4",
            name: "Smart Watch",
            price: 4500,
            rating: 4.2
        },
        {
            image: "https://picsum.photos/400/300?random=5",
            name: "Keyboard",
            price: 1800,
            rating: 4.4
        },
        {
            image: "https://picsum.photos/400/300?random=6",
            name: "Wireless Mouse",
            price: 1200,
            rating: 4.1
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-8">

            <h1 className="text-3xl font-bold text-center mb-8">
                Our Products
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {products.map((product, index) => (

                    <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                    />

                ))}

            </div>

        </div>
    );
};

export default Products;