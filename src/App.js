import './App.css';
import { Dropdown  } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import sensor from './components/sensor';
import motor from './components/motor';
import relay from './components/relay';


const App = () => {
  return (
    <div className="App">
      <h1>React Task</h1>
      <div className="content">
        <Route path="/action-1" component={sensor}/>
        <Route path="/action-2" component={motor}/>
        <Route path="/action-3" component={relay}/>
      </div>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Choose Device
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="/action-1">Sensor</Dropdown.Item>
    <Dropdown.Item href="/action-2">Motor</Dropdown.Item>
    <Dropdown.Item href="/action-3">Relay</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </div>
  );
}

export default App;
