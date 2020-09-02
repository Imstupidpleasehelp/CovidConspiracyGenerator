import React, { Component } from "react";
import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
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
    console.log(num);
    return num;
  }

  componentDidMount() {
    this.randomnum();
  }
  

  render() {
    return (
      <Container>
        <motion.Container
          initial="out"
          animate="in"
          exit="out"
          variants={changepage}
          className="textcontainer"
        >
          <div className="firstline">{this.state.first[this.randomnum()]}</div>

          <div className="secondline">
            {this.state.second[this.randomnum()]}
          </div>

          <div className="thirdline">{this.state.third[this.randomnum()]}</div>
        </motion.Container>
        <Button className="spinbutton" onClick={()=>{setTimeout(() => window.location.reload(false), 3000); clearTimeout()}}>aaaa</Button>
      </Container>
    );
  }
}

export default SlotMachine;
