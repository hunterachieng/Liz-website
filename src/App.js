import React from 'react';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Work from './components/Work';
import About from './components/About';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Work/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/resume' exact element={<Resume/>}/>
        <Route path='/contacts' exact element={<Contacts/>}/>

      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
