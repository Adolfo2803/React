import React from 'react';
import Contador from './components/Contador.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.js';

import logo from './logo.svg';


function App() {
//obtener fecha

let fecha = new Date().getFullYear();



  return (
    <div className="App">
      <Header  titulo = "Asmsystems"/>
      
      {/* <Contador/> */}
      <Footer
      fecha={fecha}/>
    </div>
  );
}

export default App;
