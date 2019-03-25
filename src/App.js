import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Workspace from './Workspace';
import MainPage from './MainPage';
import {  Redirect } from 'react-router'
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    workspace:false
    }
    this.goToWorkspace=this.goToWorkspace.bind(this)
  }
  // async componentDidMount(){
  //   var config = {
  //     headers: {'Authorization': "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjgiLCJuYmYiOjE1NTIzMTMyOTYsImV4cCI6MTU1MjkxODA5NiwiaWF0IjoxNTUyMzEzMjk2fQ.WvHOnsYCgtNFSEmoxzB_h0h09XRBkx0SGIZekKpGYoI"}
  // };
  //   var users = await axios.get("https://localhost:44346/api/workspaces/getusersbyworkspaceid/3",config).then(x => x.data);
    
  //   this.setState({users:users})
  // }
  goToWorkspace(){
    this.setState({workspace:true})
    
  }
  
  render() {
    return (
      <div className="App">
        <Workspace/>
      </div>
     );
  }
}

export default App;
