import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import NavBar from '../Components/NavBar';


class Inicio extends Component {

  render() {
    return (
      <div><NavBar></NavBar>
        <div className='container col-7'>
          <br /><br /><br />
          <Menu></Menu>
        </div>
        <div className="fixed-bottom"><Footer></Footer></div>
      </div>
    );
  }
}

export default Inicio;