import {  Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import App from '../App';
import { Route } from 'react-router-dom';
class motor extends Component {
    render() { 
        return <>
            <div style={{textAlign:"center", display: "inline-block"}}>
                <div className="content">
                    <Route path="/menu" component={App}/>
                    <Button href="/menu">Back to Home</Button>
                </div>
        <div className="motor">    
        <Form>
          <Form.Group controlId="motorId">
            <Form.Label>motorId</Form.Label>
            <Form.Control placeholder="motorId" />
          </Form.Group>
          <Form.Group controlId="motorName">
            <Form.Label>motorName</Form.Label>
            <Form.Control placeholder="motorName"/>
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
 
export default motor;
