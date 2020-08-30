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
    randomnum()  {
        let num = Math.floor(Math.random() * 6) + 1  
        console.log(num)
        return num
      }
componentDidMount() {
    this.randomnum();
}

    
  render() {
    return (
      <div className="textcontainer">
        <div className="firstline">
{this.state.first[this.randomnum]}
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
