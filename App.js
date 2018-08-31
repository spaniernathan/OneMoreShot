import React from "react";
import { StatusBar, View } from "react-native";
import CardBoard from "./components/circle/Card";
import Style from "./components/Stylesheets";

export default class App extends React.Component {
  render() {
    return (
      <View style={Style.home}>
        <StatusBar hidden={true} />
        <CardBoard />
      </View>
    );
  }
}
