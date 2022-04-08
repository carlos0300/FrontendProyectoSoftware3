import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Login from '../Components/Login';
import NavBarAdmin from '../ComponentsAdmin/NavBarAdmin';


class Inicio extends Component {

  render() {
    return (
      <div>
        <div>
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default Inicio;