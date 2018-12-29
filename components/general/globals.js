import { Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

global.oms_height = height;
global.oms_width = width;
global.oms_lang = "fr";

global.primary_lightblue = '#0f1f7a';
global.primary_blue = '#202646';
global.primary_red = '#960000';