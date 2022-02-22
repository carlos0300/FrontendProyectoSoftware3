import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Welcome() {

    return (
            <div className="container mt-5 mx-auto w-25 " >
                <label for="exampleInputEmail1" className="form-label h1 w-100 text-center">Menu</label>
                <br/><br/>
                <center>
                    <Link className="btn btn-primary" to="/">VER INVENTARIO</Link>
                </center>
            </div>
    );
  }

  export default Welcome