import React, {Component,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import axios from 'axios';

const url = "http://localhost:3001/addInventario"

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state = {
            codigo: '',
            descripcion: '',
            precio: ''
        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post(url, this.state)
        .then(response => {
          alert("Producto Agregado Exitosamente")
          window.location.reload(true)
        })
        .catch(error =>{
            alert("error")
        })
        console.log(this.state)
    }


    render() {

        const   {codigo, descripcion, precio} = this.state

        return(
            <div className=''>
                <form className="row" onSubmit={this.submitHandler}>
                    <div className="col-3">
                        <input type="text" placeholder="Código" className="form-control" name="codigo" value={codigo} onChange={this.changeHandler} ></input>
                    </div>
                    <div className="col-3">
                        <input type="text" placeholder="Descripción" className="form-control" name="descripcion" value={descripcion} onChange={this.changeHandler} ></input>
                    </div>
                    <div className="col-3">
                    <input type="text" placeholder="Precio" className="form-control" name="precio" value={precio} onChange={this.changeHandler} ></input>
                    </div>
                    <button type="submit" className="btn btn-success">Enviar</button>
                </form>
            </div>
                
        )
    }

}

export default Formulario;
