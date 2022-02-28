import React, {Component,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import axios from 'axios';

const url = "http://localhost:3001"

class Formulario extends Component{

    peticionPost = () => {
        axios.post(url, this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
      }

      componentDidMount(){
        this.peticionPost();
      }

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
        console.log(this.state)
    }


    render() {

        const   {codigo, descripcion, precio} = this.state

        return(
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
        )
    }

}

export default Formulario;
