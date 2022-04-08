import { Link} from "react-router-dom";

import usuarios from "../Pruebas/usuarios.json";

import Datatable from "react-data-table-component"


function GestionUsuarios() {

 const columnas = [
  { 
    name: "CÓDIGO",
    selector: "id",
    sortable: true,
    center:true,
    compact: true

  },
  { 
    name: "P. NOMBRE",
    selector: "pNombre",
    sortable: true,
    compact: true

  },
  { 
    name: "S. NOMBRE",
    selector: "sNombre",
    sortable: true,
    compact: true

  },
  { 
    name: "P. APELLIDO",
    selector: "pApellido",
    sortable: true,
    compact: true

  },
  { 
    name: "S. APELLIDO",
    selector: "sApellido",
    sortable: true,
    compact: true

  },
  { 
    name: "CÉDULA",
    selector: "cedula",
    sortable: true

  },
  { 
    name: "CORREO",
    selector: "correo",
    sortable: true,
    grow: 3,
    wrap: true

  },{ 
    name: "CREACIÓN",
    selector: "fCreacion",
    sortable: true,
    compact: true

  },
  { 
    name: "ÚLTIMO ACCESO",
    selector: "fAcceso",
    sortable: true,
    grow: 2

  }
 ]

 const paginationComponentOptions = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
};

const customStyles = {

  headCells: {
      style: {
          background: "#117A65",
         color: "white"
      },
  }
};


  return (
    <div className="mx-auto ">
      <h2 className="px-4 text-secondary">Usuarios en el sistema
      <Link to={"/admin/addUsuarios"} className="btn btn-info float-right px-4">Agregar</Link>
      </h2>
      <br />
      <Datatable
      columns ={columnas}
      data = {usuarios}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      striped
      highlightOnHover
      customStyles={customStyles}
      responsive
      
      
      />
    </div>
  );
}

export default GestionUsuarios;
