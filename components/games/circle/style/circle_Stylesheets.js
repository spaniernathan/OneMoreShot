import { StyleSheet, Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  cardImage: {
    height: (width * .85) * 1.455,
    width: (width * .85),
    alignItems: "center",
    justifyContent: "center"
  },
  cardboard: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    height: height - (height * 0.2),
    backgroundColor: "hsl(0, 0%, 90%)"
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    width: width * .85
  },
  endGame: {
    alignSelf: 'center'
  }
});
