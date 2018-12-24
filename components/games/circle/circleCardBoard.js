import React from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import Style from "./style/circle_Stylesheets";
import GeneralStyle from '../../general/style/general_Stylesheets';
import Card from "./circleCard";
import CustomButton from '../../custom/custom_button';
GameCards = require("./circleRessources.js").GameCards;
let { height, width } = Dimensions.get("window");

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
        <View>
          <View style={GeneralStyle.header}>
            <Text style={GeneralStyle.headerText}>Le cercle</Text>
          </View>
          <View style={Style.cardboard}>
            <TouchableOpacity activeOpacity={1} onPress={this.nextElem}>
              <Card
                type={type}
                number={number}
                rule={GameCards[number].rule}
              />
            </TouchableOpacity>
          </View>
          <View style={GeneralStyle.multipleButtons}>
            <CustomButton
              onPress={() => { this.resetCardBoard(); this.props.navigation.pop() }}
              text="Retour"
            />
            <CustomButton
              onPress={() => { this.props.navigation.push('CircleRules') }}
              text="Règles"
            />
            <CustomButton
              onPress={() => { this.nextElem(); this.resetCardBoard(); }}
              text="Reset"
            />
          </View>
        </View>
      );
    }
    if (gameStatus == 0) {
      return (
        <View>
          <View style={GeneralStyle.header}>
            <Text style={GeneralStyle.headerText}>Partie terminée !</Text>
          </View>
          <View style={Style.endGame}>
            <Text style={{
              fontSize: 25,
              textAlign: 'center',
              width: width * .85,
              marginVertical: 30
            }}>
              Vous pouvez relancer une partie ou retourner au menu pour jouer à un autre jeu !
            </Text>
            <CustomButton
              onPress={() => { this.resetCardBoard(); }}
              text="Rejouer"
            />
            <CustomButton
              onPress={() => {
                this.resetCardBoard()
                this.props.navigation.navigate('Home')
              }}
              text="Retour au menu"
            />
          </View>
        </View>
      );
    }
  }
}
