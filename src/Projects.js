import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
    <ul className="space-y-4 text-center">
      <li>
        <Link to="/projects/task-management" className="text-blue-500 hover:underline">
          Task Management App
        </Link>
      </li>
      <li>
        <Link to="/projects/ecommerce" className="text-blue-500 hover:underline">
          E-commerce Store Prototype
        </Link>
      </li>
      <li>
        <Link to="/projects/data-viz" className="text-blue-500 hover:underline">
          Data Visualization for Business Insights
        </Link>
      </li>
    </ul>
  </div>
);

export default Projects;
