import React from 'react';
import NavBar from './navbar'; // Adjust the path
import Home from './Home';
import Hero from './hero';
import Footer from './Footer';
import Services from './Services'; 
import './App.css'; // Importing the CSS styles for the application

function App() {
  return (
    <div className="App">
      <div className="centered-container">
        <NavBar />
        <Hero/>
       </div>
      <div>
      <Home/>  
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
