import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import Login from '../Components/Login';
import NavBar from '../Components/NavBar';


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