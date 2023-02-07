import React from 'react';
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Work from './components/Work';
import About from './components/About';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProsperCase from './components/Prosper';
import Masoko from './components/Masoko';



function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' exact element={<Work/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/resume' exact element={<Resume/>}/>
        <Route path='/contacts' exact element={<Contacts/>}/>
        <Route path='/prosper-case' exact element={<ProsperCase/>}/>
        <Route path='/masoko-case' exact element={<Masoko/>}/>

      </Routes>
   
    </Router>
  );
}

export default App;
