import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import WorkSpaceLoadingScreen from "./WorkSpaceLoadingScreen"
import WorkSpaceHeader from "./WorkSpaceHeader"
import WorkSpaceChannels from "./WorkSpaceChannels"
import WorkSpaceChat from "./WorkSpaceChat"


class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      channels: [],
      workspaceName: "TGP 1.8",
      channelName: "Boss Channel",
      workSpaceImg: null,
      isLoading: true
    }
  }
   componentDidMount() {
    var config = {
      headers: { 'Authorization': "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjgiLCJuYmYiOjE1NTIzMTMyOTYsImV4cCI6MTU1MjkxODA5NiwiaWF0IjoxNTUyMzEzMjk2fQ.WvHOnsYCgtNFSEmoxzB_h0h09XRBkx0SGIZekKpGYoI" }
    };
    var users =  axios.get("https://localhost:44346/api/workspaces/getusersbyworkspaceid/3", config).then(x => x.data);
    this.setState({ users: users })
    
    //Remove SetTimeOut Function and leave setstate for DEMO purposes for loading screen
    setTimeout(
    function() {
        this.setState({isLoading: false})
    }
    .bind(this),
    1500
);
    
  }
  render() {
    return (
      this.state.isLoading ?  <WorkSpaceLoadingScreen/> :
      <div>
        <WorkSpaceHeader workspaceName= {this.state.workspaceName} channelName={this.state.channelName} />
        <div id="workspace-body">
        <WorkSpaceChannels users={this.state.users} channels={this.state.channels} workSpaceImg={this.state.workSpaceImg}/>  
        <WorkSpaceChat/>
        </div>
      </div>
    )
  }

}

export default Workspace;