import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import React, { useState } from 'react';
import axios from 'axios';

const url = "http://localhost:3001/addInventario"

const FormAdd = ({children, isOpen, closeModal}) => {

    const [state, setState] = useState({
        codigo: "",
        descripcion: "",
        precio: ""
    })

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const productoData = {
            codigo: state.codigo,
            descripcion: state.descripcion,
            precio: state.precio,
        };

        axios.post(url, productoData)
        .then((res) => {
            alert("Producto Agregado Exitosamente")
                window.location.replace("/getInventario");
            })
            .catch(error => {
                alert("error")
            })
        console.log(productoData)
    }

        return (

            <div className={`modal ${isOpen && "is-open"}`}>
            <div className=" mx-auto mt-5" style={{width: "30rem"}}>
                <div className="card-body p-5 bg-white">
                    <h3 className="card-title text-info mx-5"><b>Agregar Un Producto</b></h3><br />
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label className="ml-2">Código del nuevo producto:</label>
                        <p><input type="text" placeholder="Código" className="form-control " name="codigo" value={state.codigo} onChange={handleChange}></input></p>
                        <label className="ml-2">Descripción del nuevo producto:</label>
                        <p><input type="text" placeholder="Descripción" className="form-control" name="descripcion" value={state.descripcion} onChange={handleChange}></input></p>
                        <label className="ml-2">Precio del nuevo producto:</label>
                        <p><input type="text" placeholder="Precio" className="form-control" name="precio"  value={state.precio} onChange={handleChange}></input></p>
                        <br />
                        <button type="submit" className="btn btn-success float-left px-5">Agregar</button> 
                        <label className="btn btn-danger float-right px-5" onClick={closeModal}>Cancelar</label>
                    </form>
                </div>
            </div>
            </div>
        );
};

export default FormAdd;