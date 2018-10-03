import React from "react";
import { View, TouchableOpacity, Button } from "react-native";
import Style from "./style/circle_Stylesheets";
import Card from "./Card";
GameCards = require("./Ressources.js").GameCards;

let stack_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let stack_type = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
let number = stack_number[Math.floor(Math.random() * stack_number.length)];
let type = stack_type[number - 1][Math.floor(Math.random() * stack_type[number - 1].length)];
/**
 * Trèfle : 2
 * Carreau : 3
 * Piques : 4
 * Coeur : 1
 */

export default class CardBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: number,
      type: type
    };
  }

  nextElem = () => {
    if (stack_number.length <= 0) {
      console.log('TERMINE !');
      this.props.navigation.navigate('Home');
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
    console.log(stack_type, stack_number);
    return (
      <View style={Style.cardboard}>
        <TouchableOpacity activeOpacity={1} onPress={this.nextElem}>
          <Card
            type={type}
            number={number}
            rule={GameCards[number].rule}
          />
          <Button
            onPress={() => this.props.navigation.navigate('circle_rules')}
            title="Rules"
            color="#841584"
            accessibilityLabel=""
          />
        </TouchableOpacity>
      </View>
    );
  }
}
