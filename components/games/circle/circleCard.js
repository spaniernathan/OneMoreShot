import React from "react";
import { Text, ImageBackground, View, StyleSheet } from "react-native";
import PropType from "prop-types";
CardsImgs = require("../../general/ressources").CardsImgs;

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
    height: (global.oms_width * .85) * 1.455,
    width: (global.oms_width * .85),
    alignItems: "center",
    justifyContent: "center"
  },
  cardText: {
    fontSize: global.oms_width / 22,
    textAlign: "center",
    color: "black",
    width: global.oms_width * .85
  }
})