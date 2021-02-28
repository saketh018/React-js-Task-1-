import {  Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import App from '../App';
import { Dropdown  } from 'react-bootstrap';
import { Route } from 'react-router-dom';
class relay extends Component {
    state = {
        relayNum: 0,
        isVisible: false,
    }

    render() {
        let tmpr = [];
        for (let i=1; i<=33; i++) {
            tmpr.push(<Dropdown.Item key={i} eventKey={i} onSelect={() => this.setState({relayNum: i})}>{i}</Dropdown.Item>)
        }
        let ssf = [];
        for (let i=1; i<=this.state.relayNum ; i++) {
            ssf.push(<React.Fragment><Form.Control/><br/></React.Fragment>)
        }


        return <>
            <div style={{textAlign:"center", display: "inline-block"}}>
                <div className="content">
                    <Route path="/menu" component={App}/>
                    <Button href="/menu">Back to Home</Button>
                </div>
        <div className="relay">
        <Form>
          <Form.Group controlId="relayId">
            <Form.Label>relayId</Form.Label>
            <Form.Control placeholder="relayId" />
          </Form.Group>
          <Form.Group controlId="relayName">
            <Form.Label>relayName</Form.Label>
            <Form.Control placeholder="relayName"/>
          </Form.Group>
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" onSelect={(val) => console.log(val)}>
    RelayNumber
  </Dropdown.Toggle>
              <br/><br/>
  <Dropdown.Menu onSelect={(val) => console.log(val)}>
      {tmpr}
    <Dropdown.Item ></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            {ssf}

            <br/>

          <Button variant="primary" type="submit">
            Submit
          </Button>

            <br/>
            <br/>
        </Form>
        </div>
        </div>
        </>;
    }
}

export default relay;