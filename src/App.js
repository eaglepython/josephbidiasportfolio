import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import TaskManagementApp from './projects/TaskManagementApp';
import EcommerceStore from './projects/EcommerceStore';
import DataVisualization from './projects/DataVisualization';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/task-management" element={<TaskManagementApp />} />
      <Route path="/projects/ecommerce" element={<EcommerceStore />} />
      <Route path="/projects/data-viz" element={<DataVisualization />} />
    </Routes>
  </Router>
);

export default App;
