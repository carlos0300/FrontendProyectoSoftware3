import { Link } from "react-router-dom";

function NavBarAdmin() {
  return (
    <div>
      <title>Administración</title>
      <br />
      <br />
      <br />
      <img
        src="https://thumbs.dreamstime.com/b/icono-del-usuario-avatar-masculino-en-dise%C3%B1o-plano-traje-vector-negocio-99280834.jpg"
        className="rounded-circle img-fluid px-5 py-2"
      />
      <center>
        <h6 className="text-white">Nombre de usuario</h6>
      </center>
      <br />
      <br />
      <br />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to={"/admin"}
            className="nav-link btn btn-outline-primary mt-2 mx-1"
          >
            Inicio
          </Link>
        </li>
        <li classNameName="nav-item">
          <Link
            className="nav-link btn btn-outline-primary mt-2 mx-1"
            to={"/admin/gUsuarios"}
          >
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary mt-2 mx-1" to={"#"}>
            Administradores
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary mt-2 mx-1" to={"#"}>
            Inventario
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <center>
        <Link to={"/"} className="btn btn-danger px-4">Salir</Link>
      </center>
    </div>
  );
}

export default NavBarAdmin;
