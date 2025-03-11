import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center items-center text-white">
    <h1 className="text-6xl font-bold mb-4">Joseph Bidias</h1>
    <p className="text-2xl mb-8">Aspirant Software Developer</p>
    <p className="text-lg text-center mb-12 max-w-2xl">
      Passionate about creating user-centric applications, solving complex challenges, and continuously learning.
    </p>
    <div className="flex space-x-4">
      <Link
        to="/projects"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
      >
        View Projects
      </Link>
      <Link
        to="/about"
        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
      >
        About Me
      </Link>
    </div>
  </div>
);

export default Home;
