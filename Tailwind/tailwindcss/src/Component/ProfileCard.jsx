const ProfileCard = () => {
    return (
        <div className="w-80 bg-white rounded-2xl shadow-lg p-6 text-center">

            <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-28 h-28 rounded-full mx-auto object-cover"
            />

            <h2 className="text-2xl font-bold mt-4">
                Sarath
            </h2>

            <h3 className="text-blue-600 font-semibold mt-1">
                Full Stack Developer
            </h3>

            <p className="text-gray-600 mt-3">
                Passionate about building modern and responsive
                web applications using React and JavaScript.
            </p>

            <button
                className="mt-5 bg-blue-600 text-white
                           px-6 py-2 rounded-lg
                           hover:bg-blue-700
                           transition"
            >
                Follow
            </button>

        </div>
    );
};

export default ProfileCard;