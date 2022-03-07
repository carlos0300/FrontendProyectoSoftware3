import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import FormDelete from '../Components/FormDelete';
import NavBar from '../Components/NavBar';


class Eliminar extends Component {

    render() {
        return (
                <div className='container'>
                    <br></br>
                    <center>
                        <FormDelete></FormDelete>
                        <br></br>
                    </center>
                    <br></br>
                </div>

        );
    }
}

export default Eliminar;