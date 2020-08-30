import React, { Component } from "react";

class SlotMachine extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first: ["Bill Gates", "Donald Trump", "Obama", "The Lizard People", "The Illuminatnti", "The Freemasons", "Mask Manufactors", "Aliens", "Elon Musk", "Jeff Besos", "CNN", "The W.H.O.", "Alex Jones"],
        second: ["created Corona Virus in order ", "released Covid-19 ", "created Covid-19", "bought Covid-19 from Wuhan", "created Covid-19", "ate bat soup"],
        third: ["to destroy America", "to make billions", "to turn the frogs gay", "to prepare for covid-20", " to depopulate the Earth" ,"to colonize Mars", "to put a microchip in everyone"]
      };
     
           
    
    }
    randomnum()  {
        let num = Math.floor(Math.random() * 7) + 0
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
