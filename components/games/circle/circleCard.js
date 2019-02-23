import React from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";
import PropType from "prop-types";
import { global } from "../../general/globals";
let CardsImgs = require("../../general/ressources").CardsImgs;

export default class Card extends React.Component {
  render() {
    let imgSrc = CardsImgs[this.props.type][this.props.number];
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={styles.cardText}>
          {this.props.rule}
        </Text>
        <ImageBackground source={imgSrc} style={styles.cardImage}>
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

const styles = StyleSheet.create({
  cardImage: {
    height: (global.HEIGHT * .5),
    width: (global.HEIGHT * .5) / 1.455,
    alignItems: "center",
    justifyContent: "center"
  },
  cardText: {
    fontSize: global.WIDTH / 22,
    textAlign: "center",
    color: "black",
    width: global.WIDTH * .85
  }
})