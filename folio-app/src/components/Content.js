// pages
import Home from './Home.js';
import Project from './Project.js';
import Job from './Job.js';

// router
import { Route, Routes } from 'react-router-dom';

const Content = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project/:proj" element={<Project />} />
    <Route path="/experience/:job" element={<Job />} />
  </Routes>
);

export default Content;