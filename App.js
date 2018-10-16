import React from "react";
import { createStackNavigator } from "react-navigation";
// Circle Imports
import CardBoard from "./components/games/circle/CardBoard";
// General imports
import HomeScreen from "./components/general/HomeScreen"
import mainPurple from "./components/games/purple/purple_main";
import generalSettings from "./components/general/Settings";

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
    Purple: mainPurple,
    GeneralSettings: generalSettings
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);