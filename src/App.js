import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import React from "react";
// import About from "./About";



function App() {
  return (
    <div>


    <Router>
      <NavBar />
    <Routes>
      <Route path ="/" element = {<Home/>}/>
   
    </Routes>


    </Router>






    </div>

  );
}

export default App;
