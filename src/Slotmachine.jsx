import React, { Component } from "react";

class SlotMachine extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first: ["1", "2", "3", "4", "5", "6"],
        second: ["1", "2", "3", "4", "5", "6"],
        third: ["1", "2", "3", "4", "5" ,"6"]
      };
     
           
    
    }
    randomnum()  {
        let num = Math.floor(Math.random() * 5) + 0
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
{this.state.first[this.randomnum()]}
        </div>

        <div className="secondline">
         {this.state.second[this.randomnum()]}
        </div>

        <div className="thirdline">
       {this.state.third[this.randomnum()]}
        </div>
      </div>
    );
  }
}

export default SlotMachine;
