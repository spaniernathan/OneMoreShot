import { StyleSheet, Dimensions } from "react-native";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

export default StyleSheet.create({
  cardImage: {
    height: 323,
    width: 222,
    alignItems: "center",
    justifyContent: "center"
  },
  cardboard: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150
  }
});
