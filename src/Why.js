import React from 'react';
import Collapsible from 'react-collapsible';


export const Why = () => (
    <Collapsible className="dropdown" openedClassName="opened" trigger="Start here" triggerStyle={{color: 'red'}}>
    <p>This is the collapsible content. It can be any element or React component you like.</p>
    
  </Collapsible>
)