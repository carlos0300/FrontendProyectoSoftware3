import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import BienvenidoAdmin from '../ComponentsAdmin/BienvenidoAdmin';
import GestionUsuarios from '../ComponentsAdmin/GestionUsuarios';
import NavBarAdmin from '../ComponentsAdmin/NavBarAdmin';


class GestionarUsuarios extends Component {

  render() {
    return (
      <div className="row m-0">
        <div style={{ width: "14%", height: "104vh", backgroundColor: "#2E4053" }}
          className="float-left ">
          <NavBarAdmin></NavBarAdmin>
        </div>
        <div className='mx-auto my-auto p-5' style={{ width: "86%"}}>
          <GestionUsuarios></GestionUsuarios>
        </div>
      </div>
    );
  }
}

export default GestionarUsuarios;