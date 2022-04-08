import { Link } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3001/addUsuarios";

function FormUsuarios() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const productoData = {
      pNombre: document.getElementById("pNombre").value,
      sNombre: document.getElementById("sNombre").value,
      pApellido: document.getElementById("pApellido").value,
      sApellido: document.getElementById("sApellido").value,
      cedula: document.getElementById("cedula").value,
      correo: document.getElementById("correo").value,
    };

    axios
      .post(url, productoData)
      .then((res) => {
        alert("Producto Agregado Exitosamente");
        window.location.replace("/getInventario");
      })
      .catch((error) => {
        alert("error");
      });
    console.log(productoData);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit} className="form-group col-5 p-4 mx-auto bg-white">
        <h3>Agregar Nuevo Usuario</h3>
        <br />
        <label>Primer Nombre</label>
        <input type="text" className="form-control" id="pNombre"/>
        <label>Segundo Nombre</label>
        <input type="text" className="form-control" id="sNombre" />
        <label>Primer Apellido </label>
        <input type="text" className="form-control" id="pApellido" />
        <label>Segundo Apellido</label>
        <input type="text" className="form-control" id="sApellido" />
        <label>Cédula</label>
        <input type="text" className="form-control" id="cedula" />
        <label>Correo</label>
        <input type="text" className="form-control" id="correo" />
        <br />
        <center>
          <Link to={"/admin/gUsuarios"} className="btn btn-danger px-4 mx-4">
            Cancelar
          </Link>
          <button type="submit" className="btn btn-success px-4 mx-4">
            Agregar
          </button>
        </center>
      </form>
    </div>
  );
}

export default FormUsuarios;
