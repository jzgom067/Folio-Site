// pages
import Home from './Home.js';
import Project from '../project_page/ProjectPage.js';

// router
import { Route, Routes } from 'react-router-dom';

const Content = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:type/:slug" element={<Project />} />
  </Routes>
);

export default Content;