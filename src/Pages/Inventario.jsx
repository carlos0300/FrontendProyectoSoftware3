import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import Formulario from '../Components/form';
import NavBar from '../Components/NavBar';
import TablaMateriales from '../Components/tablaMateriales';


class Inventario extends Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className='container col-7'>
          <br /><br /><br /><br />
          <center>
          <h2 className='text-primary'><b>TABLA DE INVENTARIO</b></h2>
            <br></br>
            <Formulario></Formulario>
            <br></br>
            <TablaMateriales></TablaMateriales>
          </center>
          <br></br>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Inventario;