const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}

                <div className="text-2xl font-bold">
                    MyWebsite
                </div>


                {/* Navigation Links */}

                <div className="hidden md:flex items-center gap-8">

                    <a href="#" className="hover:text-blue-400">
                        Home
                    </a>

                    <a href="#" className="hover:text-blue-400">
                        About
                    </a>

                    <a href="#" className="hover:text-blue-400">
                        Services
                    </a>

                    <a href="#" className="hover:text-blue-400">
                        Contact
                    </a>

                    <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                        Login
                    </button>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;