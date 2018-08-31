import React from "react";
import { Text, ImageBackground } from "react-native";
import Style from "../Stylesheets";
import PropType from "prop-types";
CardsImgs = require("../../assets/Ressources.js").CardsImgs;

export default class Card extends React.Component {
  render() {
    // let imgSrc = CardsImgs[this.props.type][this.props.number];
    let imgSrc;
    console.log(this.props.rule);
    return (
      <ImageBackground source={imgSrc} style={Style.cardImage}>
        <Text style={{ textAlign: "center" }}>{this.props.rule}</Text>
      </ImageBackground>
    );
  }
}

Card.PropType = {
  type: PropType.number,
  number: PropType.number,
  rule: PropType.string
};

// Card.defaultProps = {
//   type: Math.floor(Math.random() * 4 + 1),
//   number: Math.floor(Math.random() * 13 + 1),
//   rule: "Insert Rule"
// };
