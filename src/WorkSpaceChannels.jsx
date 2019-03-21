import React from "react";
import { Row, Col } from "reactstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusCircle);

export default class WorkSpaceChannels extends React.Component {
    state ={
        users:this.props.users,
        channels: this.props.channels
    }
    render() {
        return (
            <Col xs="2" >
                <Row className="workspace-body-title">
                    Channels
          <FontAwesomeIcon icon={faPlusCircle} />
                </Row>
                {this.state.channels.length ?  //if there are no Channels Render placeholder, else Render list of channels
                <Row className="workspace-body-information">
                    {this.state.channels}
                </Row>:
                <Row className="workspace-body-information">
                    No channels found
                </Row>}
                <Row className="workspace-body-title">
                    Direct Messages
          <FontAwesomeIcon icon={faPlusCircle} />
                </Row>
                {this.state.users.length ?  //if there are no users Render placeholder, else Render list of users
                    <Row className="workspace-body-information">
                        {this.state.users}
                    </Row> :
                    <Row className="workspace-body-information">
                        No users found
                </Row>}
            </Col>
        )
    }
}