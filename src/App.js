import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';



function App() {
console.log("hii");
  return (
    <div>
      <div>
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
