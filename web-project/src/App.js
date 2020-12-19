import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ModelS from './components/ModelS';
import SolarPanel from './components/SolarPanel';
import SolarRoof from './components/SolarRoof';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import Accessories from './components/Accessories';
import NavbarEnd from './components/NavbarEnd';

const App = () => {
  return (
    <>
      <Navbar/>
      <SolarPanel/>
      <ModelS/>
      <Model3/>
      <ModelX/>
      <ModelY/>
      <SolarRoof/>
      <Accessories/>
      <NavbarEnd/>
    </>
  );
}

export default App;
