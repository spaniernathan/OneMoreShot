import './components/general/globals.js';
import React from "react";
import { createStackNavigator } from "react-navigation";
/* IMPORTS FOR ROOTSTACK */
// Circle Imports
import CardBoard from "./components/games/circle/circleCardBoard";
import BeforeCircle from "./components/games/circle/circleBeforeGame";
import CardsRules from "./components/games/circle/circleCardsRules";
import CircleRules from "./components/games/circle/circleRules";
// Purple imports
import PurpleRules from './components/games/purple/purpleRules';
import PurpleGame from './components/games/purple/purpleGame';
import PurpleBeforeGame from './components/games/purple/purpleBeforeGame';
// GoG imports
import mainGoG from './components/games/gameOfGames/gogMain';
import GoGRules from './components/games/gameOfGames/gogRules';
import GoGGame from './components/games/gameOfGames/gogGame';
import GoGChoice from './components/games/gameOfGames/gogChoice';
// General imports
import HomeScreen from "./components/general/HomeScreen"
import mainPurple from "./components/games/purple/purpleMain";
import generalSettings from "./components/general/Settings";
/* END IMPORTS */

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
    GeneralSettings: generalSettings,
    BeforeCircle: BeforeCircle,
    CircleWithoutCards: CardBoard,
    CircleWithCards: CardsRules,
    CircleRules: CircleRules,
    Purple: mainPurple,
    PurpleRules: PurpleRules,
    PurpleBeforeGame: PurpleBeforeGame,
    PurpleGame: PurpleGame,
    mainGoG: mainGoG,
    GoGRules: GoGRules,
    GoGGame: GoGGame,
    GoGChoice: GoGChoice
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);