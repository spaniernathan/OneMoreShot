import React from "react";
import { View, TouchableOpacity } from "react-native";
import Style from "../Stylesheets";
import Card from "./Card";
GameCards = require("../../assets/Ressources.js").GameCards;

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 13 + 1),
      type: Math.floor(Math.random() * 4 + 1),
      counter: 0
    };
  }

  nextElem = () => {
    this.setState({
      number: Math.floor(Math.random() * 13 + 1),
      type: Math.floor(Math.random() * 4 + 1),
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <View style={Style.cardboard}>
        <TouchableOpacity activeOpacity={1} onPress={this.nextElem}>
          <Card
            type={this.state.type}
            number={this.state.number}
            rule={GameCards[this.state.number].rule}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
