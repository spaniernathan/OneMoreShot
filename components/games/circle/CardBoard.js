import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Style from "./style/circle_Stylesheets";
import Card from "./Card";
import CustomButton from '../../custom/custom_button';
GameCards = require("./Ressources.js").GameCards;

let stack_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let stack_type = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
let number = stack_number[Math.floor(Math.random() * stack_number.length)];
let type = stack_type[number - 1][Math.floor(Math.random() * stack_type[number - 1].length)];
let gameStatus = 1;

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    let index = stack_type[number - 1].indexOf(type);
    stack_type[number - 1].splice(index, 1);
    this.state = {
      number: number,
      type: type
    };
  }

  resetCardBoard = () => {
    gameStatus = 1;
    stack_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    stack_type = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
    this.setState(this.state);
  }

  nextElem = () => {
    if (stack_number.length <= 0) {
      gameStatus = 0;
      this.setState(this.state);
    } else {
      number = stack_number[Math.floor(Math.random() * stack_number.length)];
      type = stack_type[number - 1][Math.floor(Math.random() * stack_type[number - 1].length)];
      let index = stack_type[number - 1].indexOf(type);
      if (index >= 0) {
        stack_type[number - 1].splice(index, 1);
      }
      if (stack_type[number - 1].length <= 0) {
        let index2 = stack_number.indexOf(number);
        stack_number.splice(index2, 1);
      }
      this.setState({
        number: number,
        type: type
      });
    }
  };

  render() {
    if (gameStatus == 1) {
      return (
        <View style={Style.cardboard}>
          <TouchableOpacity activeOpacity={1} onPress={this.nextElem}>
            <Card
              type={type}
              number={number}
              rule={GameCards[number].rule}
            />
          </TouchableOpacity>
          <CustomButton
            onPress={() => this.props.navigation.navigate('circle_rules')}
            text="Rules"
          />
        </View>
      );
    }
    if (gameStatus == 0) {
      return (
        <View>
          <Text>La Partie est terminée !</Text>
          <CustomButton
            onPress={() => {
              this.resetCardBoard
              this.props.navigation.navigate('Home')
            }}
            text="Retour au menu"
          />
          <CustomButton
            onPress={() => { this.resetCardBoard(); }}
            text="Rejouer"
          />
        </View>
      );
    }
  }
}
