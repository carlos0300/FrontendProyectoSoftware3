import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useModal } from '../Hooks/useModal';
import FormAdd from './FormAdd';
import { Link } from 'react-router-dom';

const url = "http://localhost:3001/getInventario"

const TablaMateriales = () => {

  const [product, setProduct] = useState([])
  useEffect(() => {
    peticionGet()
  }, [])


  const peticionGet = async () => {

    const res = await axios.get(url)
    setProduct(res.data)
    console.log(res)
  }

  return (
    <div className='col-md-12'>
      <table className=" col-12 ">
        <tr>
          <td align="center">
            <h1 className="ml-5" style={{color: "#19817e"}}><b>INVENTARIO</b></h1>
          </td>
          <td align="center">
            <Link className="btn btn-success btn-lg mx-3" to={"/agregar"}>Agregar</Link>
          </td>
        </tr>
      </table>
      <br />
      <table className="table table-hover table-striped">
        <tr className='text-white' bgcolor="#19817e">
          <td align='center'><b>ID</b></td>
          <td><b>DESCRIPCIÓN</b></td>
          <td><b>PRECIO</b></td>
          <td align='center'><b>ACCIÓN</b></td>
        </tr>
        <tbody>
          {product.map((product) => (
            <tr>
              <td align='center'><b>{product.codigo}</b></td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td width='30%' align='center'>
                <Link to={`/getInventario/${product.codigo}`} className="mx-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                  </svg></Link>
                <Link to={`/eliminar/${product.codigo}`} className="mx-3 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#d21900" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMateriales;
