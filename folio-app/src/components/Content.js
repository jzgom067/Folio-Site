// pages
import Home from './Home.js';
import Project from './Project.js';

// router stuff
import { Route, Routes } from 'react-router';

const Content = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Project />} />
  </Routes>
);

export default Content;