import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';
import axios from 'axios';
import Formulario from './Components/form';

const url = "http://localhost:3001/getInventario"

class App extends Component{

state = {
  data:[]
}

peticionGet = () => {
  axios.get(url).then(response => {
    this.setState({data: response.data});
  })
}


componentDidMount(){
  this.peticionGet();
}

    render(){
    return (
    <div className='container col-6'>
      <br></br>
        <center>
          <h2 className=''><b>TABLA DE INVENTARIO</b></h2>
        </center>
       <br></br>
 
      <Formulario></Formulario>

      <br></br>
      <center>
      <table className='table'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>ID</th>
            <th>DESCRIPCIÓN</th>
            <th>PRECIO</th>
            <th>ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(users=>{
            return(
            <tr>
              <th>{users.codigo}</th>
              <td>{users.descripcion}</td>
              <td>{users.precio}</td>
              <td width='30%'><button type="button" className="btn btn-primary">Editar</button> &nbsp;&nbsp;
              <button type="button" className="btn btn-danger">Eliminar</button></td>
            </tr>
            )
          })}
        </tbody>
        </table>
      </center>
    </div>
  );
}
}

export default App;
