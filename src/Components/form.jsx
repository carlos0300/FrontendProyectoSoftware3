import 'bootstrap/dist/css/bootstrap.min.css';
import { useModal } from '../Hooks/useModal';
import FormAdd from './FormAdd';


const Formulario = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false)

        return(
            <div className='container '>
                <form className="row">
                    <div className="col-8">
                    <input type="text" placeholder="Escribe algo para buscar" className="form-control" name="busqueda" ></input>
                    </div>
                    <button type="submit" className="btn btn-info mx-2">Buscar</button>
                    <a className="btn btn-success mx-3" onClick={openModal1}>Agregar</a>
                </form>
                <FormAdd isOpen={isOpenModal1} closeModal={closeModal1}></FormAdd>
                </div>
                
        )

}

export default Formulario;
