import React from "react";
import { Menu } from "react-bootstrap/lib/Dropdown";

class UserContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('localhost:3000/getInventario')
        .then(response => response.json())
        .then(userJson => this.setState({users: userJson.result}))
    }  

    render () {
        return <Menu name="asd" />
    }
}

export default UserContainer