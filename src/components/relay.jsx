import {  Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import App from '../App';
import { Dropdown  } from 'react-bootstrap';
import { Route } from 'react-router-dom';
class relay extends Component {
    render() { 
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
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    RelayNumber
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item >1</Dropdown.Item>
    <Dropdown.Item >2</Dropdown.Item>
    <Dropdown.Item >4</Dropdown.Item>
    <Dropdown.Item >5</Dropdown.Item>
    <Dropdown.Item >6</Dropdown.Item>
    <Dropdown.Item >7</Dropdown.Item>
    <Dropdown.Item >8</Dropdown.Item>
    <Dropdown.Item >9</Dropdown.Item>
    <Dropdown.Item >10</Dropdown.Item>
    <Dropdown.Item >11</Dropdown.Item>
    <Dropdown.Item >12</Dropdown.Item>
    <Dropdown.Item >13</Dropdown.Item>
    <Dropdown.Item >14</Dropdown.Item>
    <Dropdown.Item >15</Dropdown.Item>
    <Dropdown.Item >16</Dropdown.Item>
    <Dropdown.Item >17</Dropdown.Item>
    <Dropdown.Item >18</Dropdown.Item>
    <Dropdown.Item >19</Dropdown.Item>
    <Dropdown.Item >20</Dropdown.Item>
    <Dropdown.Item >21</Dropdown.Item>
    <Dropdown.Item >22</Dropdown.Item>
    <Dropdown.Item >23</Dropdown.Item>
    <Dropdown.Item >24</Dropdown.Item>
    <Dropdown.Item >25</Dropdown.Item>
    <Dropdown.Item >26</Dropdown.Item>
    <Dropdown.Item >27</Dropdown.Item>
    <Dropdown.Item >28</Dropdown.Item>
    <Dropdown.Item >29</Dropdown.Item>
    <Dropdown.Item >30</Dropdown.Item>
    <Dropdown.Item >31</Dropdown.Item>
    <Dropdown.Item >32</Dropdown.Item>
    <Dropdown.Item ></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        </div> 
        </>;
    }
}
 
export default relay;
