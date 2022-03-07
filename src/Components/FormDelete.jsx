import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const url = "http://localhost:3001/eliminarProducto?codigo="
const urlGet = "http://localhost:3001/getInventario?codigo="

const FormDelete = ({ children }) => {


    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductById()
    }, [])

    const { codigo } = useParams()


    const handleSubmit = (e) => {
        e.preventDefault()
        const codigoi = document.getElementById("codigo").value
        const productoData = {
            codigo: codigoi
        };

        axios.post(url, productoData)
            .then((res) => {
                alert("Producto Eliminado Exitosamente")
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

    return (
        <div> <div className="modal is-open">
            <div className=" mx-auto mt-5" style={{ width: "55rem" }}>
                <div className="card-body pt-4 bg-white">
                    <h3 className="card-title text-danger mx-5"><b>Eliminar Producto</b></h3>
                    {product.map((product) => (
                        <form className="form-group row" onSubmit={handleSubmit}>
                            <table cellPadding={10} align={"center"}>
                                <tr>
                                    <td>
                                        <label className="ml-2">Código:</label>
                                    </td>
                                    <td>
                                        <label className="ml-2">Descripción:</label>
                                    </td>
                                    <td>
                                        <label className="ml-2">Precio:</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Código" className="form-control " id="codigo" value={product.codigo} readOnly></input>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" id="descripcion" defaultValue={product.descripcion} readOnly></input>
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" id="precio" defaultValue={product.precio} readOnly></input>
                                    </td>
                                </tr>
                                <tr><td></td></tr>
                                <tr>
                                    <td colSpan={3} align="center">
                                        <h5 className="text-dark"><b>¿Quieres eliminar el producto?</b></h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} align="center">
                                        <button type="submit" className="btn btn-danger px-5 mx-3">Eliminar</button>
                                        <Link className="btn btn-warning px-5 mx-3" to="/getInventario">Cancelar</Link>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    ))}
                </div>
            </div>
        </div></div>
    );

}

export default FormDelete;