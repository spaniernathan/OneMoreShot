import React from "react";
import { View, BackHandler, StatusBar, Text } from "react-native";
import Style from "./style/general_Stylesheets";
import CustomButton from '../custom/custom_button';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={Style.homescreen}>
				<StatusBar hidden={true} />
				<View style={Style.logo}>
					<Text style={{ fontSize: 30, color: 'darkblue' }}>OneMoreShot</Text>
				</View>
				<View style={Style.buttons}>
					<CustomButton
						onPress={() => this.props.navigation.navigate('BeforeCircle')}
						text="Cercle"
					/>
					<CustomButton
						onPress={() => this.props.navigation.navigate('Purple')}
						text="Purple"
					/>
					<CustomButton
						onPress={() => this.props.navigation.navigate('GeneralSettings')}
						text="Paramètres"
					/>
					<CustomButton
						onPress={() => BackHandler.exitApp()}
						text="Quitter"
					/>
				</View>
			</View>
		)
	}
}