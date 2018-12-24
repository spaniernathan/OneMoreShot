import React from "react";
import { createStackNavigator } from "react-navigation";
// Circle Imports
import CardBoard from "./components/games/circle/circleCardBoard";
import BeforeCircle from "./components/games/circle/circleBeforeGame";
import CardsRules from "./components/games/circle/circleCardsRules";
import CircleRules from "./components/games/circle/circleRules";
// Purple imports
import PurpleRules from './components/games/purple/purpleRules';
// General imports
import HomeScreen from "./components/general/HomeScreen"
import mainPurple from "./components/games/purple/purpleMain";
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
    BeforeCircle: BeforeCircle,
    CircleWithoutCards: CardBoard,
    CircleWithCards: CardsRules,
    CircleRules: CircleRules,
    Purple: mainPurple,
    GeneralSettings: generalSettings,
    PurpleRules: PurpleRules
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);