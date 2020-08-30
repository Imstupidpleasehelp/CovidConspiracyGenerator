import React from 'react';
import './App.css';
import SlotMachine from './Slotmachine';
import { Title } from './title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
       <SlotMachine />
      </header> 
     
    </div>
  );
}

export default App;
