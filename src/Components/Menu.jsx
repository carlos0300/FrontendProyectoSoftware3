import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
    

    return (
            <div className="container mt-5 mx-auto" >
                <label for="exampleInputEmail1" className="form-label h1 w-100 text-center">Menu</label>
                <br/><br/>
                <center>
                    <a href='/getInventario' className="btn btn-primary px-5 pb-0" ><h5>VER INVENTARIO</h5></a>
                    <br /> <br /> 
                    <button className="btn btn-primary px-5 pb-0" >modal</button>
                </center>
                
            </div>
    );
}

  export default Menu