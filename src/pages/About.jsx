import moviesWorldImage from "../assets/moviesWorldImage.jpg";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div
        className="relative w-full h-64 sm:h-96 bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${moviesWorldImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl sm:text-6xl font-bold z-10 text-center">
          About MovieApp
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-lg sm:text-xl mb-4">
          MovieApp is your ultimate platform to explore movies and TV shows from
          around the world. Discover trending titles, search by genre, and get
          detailed info including cast, trailers, and similar content.
        </p>
        <p className="text-gray-300 text-base sm:text-lg">
          Built with modern web technologies like React, Redux Toolkit, and
          Tailwind CSS, this app demonstrates best practices in performance,
          responsiveness, and user experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 pb-12">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Search movies and TV shows</li>
            <li>Filter by genre</li>
            <li>View detailed info, cast, and trailers</li>
            <li>See similar movies & series recommendations</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>React + React Router</li>
            <li>Redux Toolkit + RTK Query</li>
            <li>Tailwind CSS</li>
            <li>TMDB API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
