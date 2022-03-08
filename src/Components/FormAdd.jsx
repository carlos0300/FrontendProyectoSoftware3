import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "http://localhost:3001/addInventario"
const urlGet = "http://localhost:3001/asignarId"

const FormAdd = ({children}) => {

    const [state, setState] = useState([])

    useEffect(() => {
        getId()
      }, [])


    const handleSubmit = (e) => {
            e.preventDefault()
        const productoData = {
            codigo: document.getElementById("codigo").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value
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

    const getId = async () => {
        const res = await axios.get(urlGet)
        setState(res.data)
        console.log("****************")
        console.log(state)
    }

        return (

            <div className="modal is-open">
            <div className=" mx-auto mt-5" style={{width: "30rem"}}>
                <div className="card-body p-5 bg-white">
                    <h3 className="card-title text-info mx-5"><b>Agregar Un Producto</b></h3><br />
                    {state.map ((ultimo) => (
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label className="ml-2">Código del nuevo producto:</label>
                        <p><input type="text" placeholder="Código" className="form-control " id="codigo" value={ultimo.codigo} readOnly></input></p>
                        <label className="ml-2">Descripción del nuevo producto:</label>
                        <p><input type="text" placeholder="Descripción" className="form-control" id="descripcion" ></input></p>
                        <label className="ml-2">Precio del nuevo producto:</label>
                        <p><input type="text" placeholder="Precio" className="form-control" id="precio" ></input></p>
                        <br />
                        <button type="submit" className="btn btn-success float-left px-5">Agregar</button> 
                        <Link className="btn btn-danger float-right px-5" to={"/getInventario"}>Cancelar</Link>
                    </form>
                    ))}
                </div>
            </div>
            </div>
        );
};

export default FormAdd;