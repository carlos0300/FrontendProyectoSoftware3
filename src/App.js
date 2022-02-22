import './App.css';
import Welcome from './Components/Menu';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserContainer from './Components/UserContainer';


import { useEffect, useState } from 'react';

function App() {
  const url = "127.0.0.1:3000/getInventario"
  //https://jsonplaceholder.typicode.com/todos
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    }

    useEffect(()=> {
      fetchApi()
    }, [])
  
    return (
    <div>
      Hola Mundo
      <ul>
        {!todos ? 'Cargando..' :
        todos.map( (todo => <li>{todo.title}</li> ))
        }
      </ul>
    </div>
  );
}

export default App;
