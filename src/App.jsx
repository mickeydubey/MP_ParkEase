// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary modules from react-router-dom

import Home from './pages/home';
import Contactus from './pages/contactus';
import Service from './components/services/service';
import Admin from './pages/admin';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './App.css'; // Importing the CSS styles for the application

function App() {
  return (
    
    <Router>
<Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contactus" element={<Contactus />} />
    <Route path="/services" element={<Service />} />
    <Route path="/admin" element={<Admin />} />

    
    
  </Routes>
  <Footer></Footer>
</Router>
  );
}

export default App;
