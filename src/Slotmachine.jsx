import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { First } from "react-bootstrap/esm/PageItem";
class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: [
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
        "created Corona Virus  ",
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
        "to destroy America",
        "to make billions",
        "to turn the frogs gay",
        "to prepare for covid-20",
        " to depopulate the Earth",
        "to colonize Mars",
        "to put a microchip in everyone",
        "to force everyone to use 5G",
        "to make everyone stay home",
      ],
    };
  }

  randomnum() {
    let num = Math.floor(Math.random() * 9) + 0;

    return num;
  }

  componentDidMount() {
    this.randomnum();
  }

  render() {
    return (
      <div>
        <div className="">
          {this.state.first.map((first) => (
            <div className="">{first}</div>
          ))}
        </div>
        <div className="">
          {this.state.second.map((second) => (
            <div className="">{second}</div>
          ))}
        </div>
        <div className="">
          {this.state.third.map((third) => (
            <div className="">{third}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default SlotMachine;
