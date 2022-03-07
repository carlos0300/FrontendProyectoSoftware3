import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import FormEdit from '../Components/FormEdit';
import NavBar from '../Components/NavBar';


class Editar extends Component {

  render() {
    return (
        <div className='container col-7'>
          <br></br>
          <center>
            <br></br>
            <FormEdit></FormEdit>
          </center>
          <br></br>
        </div>

    );
  }
}

export default Editar;