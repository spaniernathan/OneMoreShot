import React from "react";
import { Text, ImageBackground } from "react-native";
import Style from "./style/circle_Stylesheets";
import PropType from "prop-types";
CardsImgs = require("./Ressources.js").CardsImgs;

export default class Card extends React.Component {
  render() {
    let imgSrc = CardsImgs[this.props.type][this.props.number];
    return (
      <ImageBackground source={imgSrc} style={Style.cardImage}>
        <Text style={{ textAlign: "center", color: "purple" }}>
          {this.props.rule}
        </Text>
      </ImageBackground>
    );
  }
}

Card.propType = {
  type: PropType.number,
  number: PropType.number,
  rule: PropType.string
};
