import React from "react";
import { Text, ImageBackground, View } from "react-native";
import Style from "./style/circle_Stylesheets";
import PropType from "prop-types";
CardsImgs = require("./circleRessources.js").CardsImgs;

export default class Card extends React.Component {
  render() {
    let imgSrc = CardsImgs[this.props.type][this.props.number];
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={Style.cardText}>
          {this.props.rule}
        </Text>
        <ImageBackground source={imgSrc} style={Style.cardImage}>
        </ImageBackground>
      </View>
    );
  }
}

Card.propType = {
  type: PropType.number,
  number: PropType.number,
  rule: PropType.string
};
