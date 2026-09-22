import Card from "./Component/Card";
import "./App.css";
import Result from "./Component/Result";
import Product from "./Component/Product";

function App() {
    return (
        <div>

            <h1>Card Components</h1>

            <Card title="Product" footer="₹999">
                <p>This is a great product.</p>
                <p>High quality and affordable.</p>
            </Card>

            <Card title="About" footer="Learn More">
                <p>We are a software development company.</p>
                <p>We create modern web applications.</p>
            </Card>

            <Card title="Contact" footer="Contact Us">
                <p>Email: example@gmail.com</p>
                <p>Phone: 9876543210</p>
            </Card>

            <Result />

            <Product />

        </div>
    );
}

export default App;