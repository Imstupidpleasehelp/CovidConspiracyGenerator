import React, { Component } from "react";
import { Button } from "react-bootstrap";
class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: [
        "Spin ",
        "Bill Gates",
        "Donald Trump",
        "Obama",
        "The Lizard People",
        "The Illuminatnti",
        "The Freemasons",
        "Mask Manufactors",
        "Aliens",
        "Jeff Besos",
        "China",
        "The W.H.O.",
        "Alex Jones",
      ],
      second: [
        "to see",
        "created Corona Virus",
        "released Covid-19 ",
        "created Covid-19",
        "bought Covid-19 from Wuhan",
        "created Covid-19",
        "ate bat soup",
        "Made 5G",
        "cancelled football",
        "bought covid-19 from aliens",
      ],
      third: [
        "the truth!",
        "to destroy America",
        "to make billions",
        "to turn the frogs gay",
        "to prepare for covid-20",
        "to depopulate the Earth",
        "so we have to colonize Mars",
        "to put a microchip in everyone",
        "to force everyone to use 5G",
        "to make everyone stay home",
      ],
      firstIndex: 0,
      secondIndex: 0,
      thirdIndex: 0
    };
  }

  randomnum = () => {
    let num = Math.floor(Math.random() * 9) + 1;
    console.log(num)
    this.setState({firstIndex: num});
    this.setState({secondIndex: num});
    this.setState({thirdIndex: num});
  }

 

  render() {
    return (
      <div>
        <div className="conspiracy">
        {this.state.first[this.state.firstIndex]}
          
        </div>
        <div className="">
          
            <div className="conspiracy">{this.state.second[this.state.secondIndex]}</div>
          
        </div>
        <div className="">
          
            <div className="conspiracy">{this.state.third[this.state.thirdIndex]}</div>
         
        </div>
        <button className="button b-red" onClick={this.randomnum}>Spin!</button>
      </div>
    );
  }
}
export default SlotMachine;
