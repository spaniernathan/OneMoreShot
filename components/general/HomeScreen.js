import React from "react";
import { View, BackHandler, StatusBar, Text, StyleSheet, AsyncStorage } from "react-native";
import CustomButton from '../custom/custom_button';

import * as scr from './save';
let GameCards = require("../games/circle/circleRessources.js").GameCards;

export default class HomeScreen extends React.Component {
	render() {
		checkFirstStart();
		return (
			<View style={styles.homescreen}>
				<StatusBar hidden={true} />
				<View style={styles.logo}>
					<Text style={{ fontSize: global.oms_width / 10, color: global.primary_blue }}>OneMoreShot</Text>
				</View>
				<View style={styles.buttons}>
					<CustomButton
						onPress={() => this.props.navigation.navigate('mainGoG')}
						text="Jeu du jeu"
					/>
					<CustomButton
						onPress={() => this.props.navigation.navigate('BeforeCircle')}
						text="Cercle"
					/>
					<CustomButton
						onPress={() => this.props.navigation.navigate('Purple')}
						text="Purple"
					/>
				</View>
				<View style={styles.buttons}>
					<CustomButton
						onPress={() => this.props.navigation.navigate('GeneralSettings')}
						text="Paramètres"
					/>
					<CustomButton
						onPress={() => BackHandler.exitApp()}
						text="Quitter"
					/>
				</View>
				<View style={{
					top: global.oms_width - (global.oms_width * 0.1),
				}}>
					<Text style={{
						fontSize: global.oms_width / 30,
						textAlign: 'center'
					}}>
						L'abus d'alcool est dangereux pour la santé.
					</Text>
				</View>
			</View>
		)
	}
}

function checkFirstStart() {
	AsyncStorage.getItem('ft').then( (val) => {
		if (val == null) {
			AsyncStorage.setItem('ft', 'true');
			for (let i = 1; i < 14; i++) {
				scr.saveCircleRule(i, GameCards[i].rule);
			}
		}
	});
}

const styles = StyleSheet.create({
	homescreen: {
		backgroundColor: 'white',
		height: global.oms_height
	},
	buttons: {
		width: global.oms_width * 0.95,
		alignSelf: 'center',
		marginBottom: global.oms_width * 0.05,
	},
	logo: {
		alignSelf: 'center',
		marginVertical: global.oms_width * 0.1
	}
});