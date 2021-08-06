import React,{useState} from 'react';
import Contador from './components/Contador.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.js';

import logo from './logo.svg';


function App() {
//obtener fecha

let fecha = new Date().getFullYear();
const [producto, setProducto] = useState(
  [{'id': 1,'camisa': 'angular','precio': 50},
  {'id': 2,'camisa': 'node','precio': 40},
  {'id': 3,'camisa': 'java','precio': 30},
  {'id': 4,'camisa': 'dart','precio': 45}

]

);



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
