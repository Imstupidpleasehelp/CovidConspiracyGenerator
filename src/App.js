import React from 'react';
import './App.css';
import SlotMachine from './Slotmachine';
import { Title } from './title';
import { Why } from './Why';

import { Container} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container className="App-header">
        <Title />
        
       <SlotMachine />
       <Why />
      </Container> 
     
    </div>
  );
}

export default App;
