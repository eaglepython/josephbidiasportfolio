import React from 'react';

const projects = [
  {
    title: "Task Management Web App",
    description: "Developed a full-stack web application for task tracking using React, Node.js, and PostgreSQL. Features real-time updates and secure user authentication.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/eaglepython/task-management-app"
  },
  {
    title: "E-commerce Store Prototype",
    description: "Built a dynamic storefront with React, featuring product search, cart functionality, and secure payment integration using the Stripe API.",
    technologies: ["React", "Stripe API", "Node.js"],
    link: "https://github.com/eaglepython/ecommerce-prototype"
  },
  {
    title: "Data Visualization for Business Insights",
    description: "Created interactive data dashboards using Tableau and Python libraries (Pandas, Matplotlib) to automate data collection and enable real-time analytics.",
    technologies: ["Tableau", "Python", "Pandas"],
    link: "https://github.com/eaglepython/data-visualization"
  }
];

const Projects = () => (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
          <a
            href={project.link}
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
