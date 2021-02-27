import {  Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import App from '../App';
import { Route } from 'react-router-dom';
class sensor extends Component {
    render() { 
        return <>
            <div style={{textAlign:"center", display: "inline-block"}}>
                <div className="content">
                    <Route path="/menu" component={App}/>
                    <Button href="/menu">Back to Home</Button>
                </div>
        <div className="sensor">    
        <Form>
          <Form.Group controlId="sensorId">
            <Form.Label>sensorId</Form.Label>
            <Form.Control placeholder="sensorId" />
          </Form.Group>
          <Form.Group controlId="sensorName">
            <Form.Label>sensorName</Form.Label>
            <Form.Control placeholder="sensorName"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        </div> 
        </>;
    }
}
 
export default sensor;
