import './App.css';

import { Component } from 'react';
import axios from 'axios';

const url = "localhost:3001/getInventario"

class App extends Component{

state = {
  data:[]
}

peticionGet = () => {
  axios.get(url).then(response => {
    this.setState({data: response.data});
  })
}


componentDidMount(){
  this.peticionGet();
}

    render(){
    return (
    <div>
      <center>
      <h2>Nombres</h2> <br/>
        {this.state.data.map(users=>{
          return(
            <p>{users.title}</p>
          )
        })}
      </center>
    </div>
  );
}
}

export default App;
