import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";


import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;