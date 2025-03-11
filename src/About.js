import React from 'react';

const About = () => (
  <div className="min-h-screen bg-gray-100 p-10">
    <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p className="text-gray-700">
          I am an aspirant software developer with a strong foundation in Python, JavaScript, and software engineering principles. I thrive on collaborative problem-solving and building user-centric applications while continuously learning and evolving.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <p className="text-gray-700">
          Python, JavaScript, SQL, React, Node.js, HTML, CSS, Agile methodologies, REST API Design, Git, PostgreSQL, MongoDB, AWS, Azure, Docker, Kubernetes, Tableau, Power BI, Pandas
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-700 mb-2">
          <strong>Data Analyst</strong> at Verizon, Southlake, TX (Feb 2021 – Dec 2024)
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Developed interactive dashboards using Python and Power BI.</li>
          <li>Managed end-to-end software deployment and collaborated with engineers.</li>
          <li>Conducted data-driven analysis to optimize workflows and decision-making.</li>
        </ul>
        <p className="text-gray-700 mb-2">
          <strong>Java Software Engineering Apprentice</strong> at Dallas College/GenerationUSA, Remote (Jan 2023 – Jun 2023)
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Built full-stack applications using React and FastAPI.</li>
          <li>Developed RESTful APIs and optimized backend data processing.</li>
          <li>Designed cloud-based architectures with AWS for enhanced scalability.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Software Engineering Certificate</strong> – Dallas College/GenerationUSA (2023)</li>
          <li><strong>Full-Stack Web Development Bootcamp</strong> – Codecademy (2023)</li>
          <li><strong>Certified AI/ML Engineer</strong> – ELVTR (2024)</li>
          <li><strong>Certified AI Solution Architect</strong> – ELVTR (2024)</li>
          <li><strong>AWS Certified Machine Learning Specialty</strong> – AWS (2023)</li>
          <li><strong>AWS Solution Architect</strong> – AWS Academy (2023)</li>
        </ul>
      </section>
    </div>
  </div>
);

export default About;
