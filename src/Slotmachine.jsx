import React, { Component } from "react";

class SlotMachine extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first: ["weewew", "ass", "Twevle"],
        second: ["2nd", "endasd", "aasdasdsad"],
        third: ["23erd", "popsilcles", "peoepe"]
      };
    }
   

componentDidMount() {
    
        let num = Math.floor(Math.random() * 10 + 1);
    console.log(num)
}
    
  render() {
    return (
      <div className="textcontainer">
        <div className="firstline">

        </div>

        <div className="secondline">
          Gay frogs 
        </div>

        <div className="thirdline">
          Other stuff 
        </div>
      </div>
    );
  }
}

export default SlotMachine;
