import React from "react";
import { createStackNavigator } from "react-navigation";
import CardBoard from "./components/games/circle/CardBoard";
import HomeScreen from "./components/general/HomeScreen"

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Circle: CardBoard,
  },
);