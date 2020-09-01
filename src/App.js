import React from 'react';
import './App.css';
import SlotMachine from './Slotmachine';
import { Title } from './title';
import { Why } from './Why';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
       <SlotMachine />
       <Why />
      </header> 
     
    </div>
  );
}

export default App;
