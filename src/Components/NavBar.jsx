import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top" style={{height: "5rem"}}>
                <a className="navbar-brand text-white ml-auto mt-2" href="/"><h4>Home</h4></a>
                <a className="navbar-brand text-white mx-3 mt-2" href="/getInventario"><h4>Inventario</h4></a>
                <a className="navbar-brand text-white mx-3 mt-2" href="#"><h4>Usuarios</h4></a>
                    <form className="form-inline my-2 my-lg-0 mr-5 mx-3">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info my-2 my-sm-0  text-white" type="submit">Search</button>
                    </form>
            </nav>

        </div>
    );
}

export default NavBar