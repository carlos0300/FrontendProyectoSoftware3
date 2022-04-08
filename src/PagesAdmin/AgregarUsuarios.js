import { Component } from "react";
import FormUsuarios from "../ComponentsAdmin/FormUsuarios";
import NavBarAdmin from "../ComponentsAdmin/NavBarAdmin";

class AgregarUsuarios extends Component{
    render(){
        return(
            <div className="row m-0">
        <div style={{ width: "14%", height: "104vh", backgroundColor: "#2E4053" }}
          className="float-left ">
          <NavBarAdmin></NavBarAdmin>
        </div>
        <div className='mx-auto my-auto p-5' style={{ width: "86%", height: "104vh", backgroundColor: " #e5e7e9 "}}> 
            <FormUsuarios></FormUsuarios>
        </div>
      </div>
        );
        }
}

export default AgregarUsuarios;