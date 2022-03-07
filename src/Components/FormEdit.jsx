import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = "http://localhost:3001/modInventario"
const urlGet = "http://localhost:3001/getInventario?codigo="

const FormEdit = ({children}) => {


    const [product, setProduct] = useState([])


    useEffect(() => {
        getProductById()
      }, [])

    const {codigo} = useParams()


    const handleSubmit = (e) => {
        e.preventDefault()
        const productoData = {
            codigo: document.getElementById("codigo").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value,
        };

        axios.put(url, productoData)
        .then((res) => {
            alert("Producto Editado Exitosamente")
                window.location.replace("/getInventario");
            })
            .catch(error => {
                alert("error")
            })
        console.log(productoData)
    }

    const getProductById = async () => {
        const res = await axios.get(urlGet + codigo)
        setProduct(res.data)
    }

    return(
        <div> <div className="modal is-open">
        <div className=" mx-auto mt-5" style={{width: "30rem"}}>
            <div className="card-body p-5 bg-white">
                <h3 className="card-title text-info mx-5"><b>Editar Productos</b></h3><br />
                {product.map((product) => (
                <form className="form-group" onSubmit={handleSubmit}>
                    <label className="ml-2">Código del producto:</label>
                    <p><input type="text" placeholder="Código" className="form-control " id='codigo' value={product.codigo} readOnly></input></p>
                    <label className="ml-2">Descripción del producto:</label>
                    <p><input type="text" className="form-control" id="descripcion" defaultValue={product.descripcion} ></input></p>
                    <label className="ml-2">Precio del producto:</label>
                    <p><input type="text" className="form-control" id="precio"  defaultValue={product.precio} ></input></p>
                    <br />
                    <button type="submit" className="btn btn-success float-left px-5">Editar</button> 
                    <Link className="btn btn-danger float-right px-5" to="/getInventario">Cancelar</Link>
                </form>
                ))}
            </div>
        </div>
        </div></div>
    );

}

export default FormEdit;