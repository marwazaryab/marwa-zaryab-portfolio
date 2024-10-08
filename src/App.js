import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import React from "react";
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';




function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <NavBar />
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
