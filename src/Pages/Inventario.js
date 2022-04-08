import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import TablaMateriales from '../Components/tablaMateriales';


class Inventario extends Component {

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className='container col-7'>
          <br />
            <TablaMateriales></TablaMateriales>
          <br></br>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Inventario;