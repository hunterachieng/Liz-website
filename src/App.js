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
import AzaCase from './components/Aza';
import Voice from './components/Voice';
import ProtectedRoute from './components/ProtectedPage';
import LoginPage from './components/Login';
import useLocalStorageExpiry from './atoms/StorageExpiry';



function App() {
  useLocalStorageExpiry("user", 60);
  return (
    <Router>
      
      <Routes>
        <Route path='/' exact element={<Work/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/resume' exact element={<Resume/>}/>
        <Route path='/login' exact element={<LoginPage/>}/>
        <Route path='case' exact element={<ProtectedRoute/>}>
        <Route   path='prosper-case' element={<ProsperCase/>}/>
        <Route  exact path='masoko-case' element={<Masoko/>}/>
        <Route  exact path='aza-case' element={<AzaCase/>}/>
        <Route  exact path='voice-case' element={<Voice/>}/>
        </Route>
        {/* <Route path='/prosper-case' exact element={<ProtectedRoute/>}>
        <Route  exact  path='/prosper-case' element={<ProsperCase/>}/>
        </Route> */}
        {/* <Route path='/masoko-case'  element={<ProtectedRoute/>}>
        <Route  exact path='/masoko-case' element={<Masoko/>}/>
        </Route> */}
        {/* <Route path='/aza-case'  element={<ProtectedRoute/>}>
        <Route  exact path='/aza-case' element={<AzaCase/>}/>
        </Route> */}
        {/* <Route path='/voice-case'  element={<ProtectedRoute/>}>
        <Route  exact path='/voice-case' element={<Voice/>}/>
        </Route> */}
      

      </Routes>
   
    </Router>
  );
}

export default App;
