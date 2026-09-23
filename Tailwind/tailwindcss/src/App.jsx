import Navbar from "./Component/Navbar";
import ProfileCard from "./Component/ProfileCard";
import Products from "./Component/Products";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <section className="flex justify-center py-10">

                <ProfileCard />

            </section>

            <Products />

        </div>
    );
}

export default App;