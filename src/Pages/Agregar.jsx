import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import FormAdd from '../Components/FormAdd';
import NavBar from '../Components/NavBar';
import TablaMateriales from '../Components/tablaMateriales';


class Agregar extends Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className='container col-7'>
          <br />
          <TablaMateriales></TablaMateriales>
          <center>
            <FormAdd></FormAdd>
            <br></br>
          </center>
          <br></br>
        </div>
        <Footer></Footer>
      </div>

    );
  }
}

export default Agregar;