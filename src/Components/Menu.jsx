import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {


    return (
        <div classNameName="container mt-5 mx-auto" >

<br/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/Inventario1.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/Inventario2.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/Inventario3.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <br/>

        </div>
    );
}

export default Menu