import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import BienvenidoAdmin from '../ComponentsAdmin/BienvenidoAdmin';
import NavBarAdmin from '../ComponentsAdmin/NavBarAdmin';


class InicioAdmin extends Component {

  render() {
    return (
      <div className="row m-0">
        <div style={{ width: "14%", height: "103vh", backgroundColor: "#2E4053" }}
          className="float-left">
          <NavBarAdmin></NavBarAdmin>
        </div>
        <div className='mx-auto my-auto'>
          <BienvenidoAdmin></BienvenidoAdmin>
        </div>
      </div>
    );
  }
}

export default InicioAdmin;