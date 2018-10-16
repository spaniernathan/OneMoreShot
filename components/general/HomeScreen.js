import React from "react";
import { View, BackHandler, StatusBar } from "react-native";
import Style from "../general/style/general_Stylesheets";
import CustomButton from '../custom/custom_button';

export default class HomeScreen extends React.Component {
	render() {
		return (
			<View style={Style.home}>
				<StatusBar hidden={true} />
				<CustomButton
					onPress={() => this.props.navigation.navigate('Circle')}
					text="The Circle"
				/>
				<CustomButton
					onPress={() => this.props.navigation.navigate('Purple')}
					text="Purple"
				/>
				<CustomButton
					onPress={() => this.props.navigation.navigate('GeneralSettings')}
					text="Settings"
				/>
				<CustomButton
					onPress={() => BackHandler.exitApp()}
					text="Quit"
				/>
			</View>
		)
	}
}