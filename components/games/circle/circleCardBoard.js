import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Card from "./circleCard";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import MultiButtons from "../../custom/oms_multibuttons";
import * as save from "../../general/save";

let stack_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let stack_type = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
let number = stack_number[Math.floor(Math.random() * stack_number.length)];
let type = stack_type[number - 1][Math.floor(Math.random() * stack_type[number - 1].length)];
let gameStatus = 1;

let Rules = [
    {rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""},{rule: ""}
];

save.getCircleRules(1).then((val)=>{Rules[0].rule = val;});
save.getCircleRules(2).then((val)=>{Rules[1].rule = val;});
save.getCircleRules(3).then((val)=>{Rules[2].rule = val;});
save.getCircleRules(4).then((val)=>{Rules[3].rule = val;});
save.getCircleRules(5).then((val)=>{Rules[4].rule = val;});
save.getCircleRules(6).then((val)=>{Rules[5].rule = val;});
save.getCircleRules(7).then((val)=>{Rules[6].rule = val;});
save.getCircleRules(8).then((val)=>{Rules[7].rule = val;});
save.getCircleRules(9).then((val)=>{Rules[8].rule = val;});
save.getCircleRules(10).then((val)=>{Rules[9].rule = val;});
save.getCircleRules(11).then((val)=>{Rules[10].rule = val;});
save.getCircleRules(12).then((val)=>{Rules[11].rule = val;});
save.getCircleRules(13).then((val)=>{Rules[12].rule = val;});

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

  componentWillUpdate() {
    save.getCircleRules(1).then((val)=>{Rules[0].rule = val;});
    save.getCircleRules(2).then((val)=>{Rules[1].rule = val;});
    save.getCircleRules(3).then((val)=>{Rules[2].rule = val;});
    save.getCircleRules(4).then((val)=>{Rules[3].rule = val;});
    save.getCircleRules(5).then((val)=>{Rules[4].rule = val;});
    save.getCircleRules(6).then((val)=>{Rules[5].rule = val;});
    save.getCircleRules(7).then((val)=>{Rules[6].rule = val;});
    save.getCircleRules(8).then((val)=>{Rules[7].rule = val;});
    save.getCircleRules(9).then((val)=>{Rules[8].rule = val;});
    save.getCircleRules(10).then((val)=>{Rules[9].rule = val;});
    save.getCircleRules(11).then((val)=>{Rules[10].rule = val;});
    save.getCircleRules(12).then((val)=>{Rules[11].rule = val;});
    save.getCircleRules(13).then((val)=>{Rules[12].rule = val;});
  }

  resetCardBoard = () => {
    gameStatus = 1;
    stack_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    stack_type = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
    this.setState(this.state);
  };

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
    if (gameStatus) {
      return (
        <View>
          <Header title="Le cercle" />
          <View style={styles.cardboard}>
            <TouchableOpacity activeOpacity={1} onPress={this.nextElem}>
              <Card
                type={type}
                number={number}
                rule={Rules[number - 1].rule}
              />
            </TouchableOpacity>
          </View>
          <MultiButtons>
            <CustomButton
              onPress={() => { this.resetCardBoard(); this.props.navigation.pop() }}
              text="Retour"
              buttonStyle={{
                width: global.oms_width * .30
              }}
            />
            <CustomButton
              onPress={() => { this.props.navigation.push('CircleRules') }}
              text="Règles"
              buttonStyle={{
                width: global.oms_width * .30
              }}
            />
            <CustomButton
              onPress={() => { this.nextElem(); this.resetCardBoard(); }}
              text="Reset"
              buttonStyle={{
                width: global.oms_width * .30
              }}
            />
          </MultiButtons>
        </View>
      );
    }
    if (!gameStatus) {
      return (
        <View>
          <Header title="Partie terminée !" />
          <View style={styles.endGame}>
            <Text style={{
              fontSize: 25,
              textAlign: 'center',
              width: global.oms_width * .85,
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
                this.resetCardBoard();
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

const styles = StyleSheet.create({
  cardboard: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    height: global.oms_height - (global.oms_height * 0.18),
    backgroundColor: "hsl(0, 0%, 90%)"
  },
  endGame: {
    alignSelf: 'center'
  }
});