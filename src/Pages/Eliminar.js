import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import Footer from '../Components/Footer';
import FormDelete from '../Components/FormDelete';
import NavBar from '../Components/NavBar';
import TablaMateriales from '../Components/tablaMateriales';


class Eliminar extends Component {

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className='container col-7'>
                    <br />
                    <TablaMateriales></TablaMateriales>
                    <center>
                        <FormDelete></FormDelete>
                        <br></br>
                    </center>
                    <br></br>
                </div>
                <Footer></Footer>
            </div>

        );
    }
}

export default Eliminar;