import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import axios from 'axios';
import Formulario from './Components/form';
import TablaMateriales from './Components/tablaMateriales';

const url = "http://localhost:3001/getInventario"

class App extends Component{

    render(){
    return (
    <div className='container col-7'>
      <br></br>
        <center>
          <h2 className=''><b>TABLA DE INVENTARIO</b></h2>
          <br></br>
          <Formulario></Formulario>
          <br></br>
          <TablaMateriales></TablaMateriales>
        </center>
      <br></br>
</div>
  );
}
}

export default App;