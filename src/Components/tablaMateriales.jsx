import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useModal } from '../Hooks/useModal';
import FormEdit from './FormEdit';
import { Link } from 'react-router-dom';

const url = "http://localhost:3001/getInventario"

const TablaMateriales = () => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false)

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
            {product.map ((product) => (
              <tr>
                  <th>{product.codigo}</th>
                  <td>{product.descripcion}</td>
                  <td>{product.precio}</td>
                  <td width='30%'><Link className="btn btn-primary" to={`/getInventario/${product.codigo}`}>Editar</Link> &nbsp;&nbsp;
                    <Link to={`/eliminar/${product.codigo}`} className="btn btn-danger">Eliminar</Link></td>
                </tr>
            ))}
                
          </tbody>
        </table>
      </div>
    );
}

export default TablaMateriales;
