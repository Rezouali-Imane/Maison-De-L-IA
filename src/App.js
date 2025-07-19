import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import Games from './pages/Games';
import Coding from './pages/Coding';
import Event from './pages/Events';


function App() {

  return (
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/games" element={<Games />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/event" element={<Event />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;