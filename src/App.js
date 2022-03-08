import './App.css';
import Inventario from './Pages/Inventario';
import { Component } from 'react';
import Inicio from './Pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editar from './Pages/Editar';
import Eliminar from './Pages/Eliminar';
import Agregar from './Pages/Agregar';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/getInventario' element={<Inventario />} />
            <Route path='/agregar' element={<Agregar />} />
            <Route path='/getInventario/:codigo' element={<Editar />} />
            <Route path='/eliminar/:codigo' element={<Eliminar />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
      </BrowserRouter>

    );
  }
}

export default App;