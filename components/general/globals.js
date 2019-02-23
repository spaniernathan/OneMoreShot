import { Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

export const global = {
    HEIGHT: height,
    WIDTH: width,
    LANG: "fr_FR",
    BLUE: "#202646",
    RED: "#960000",
    LIGHTBLUE: "#0f1f7a"
};