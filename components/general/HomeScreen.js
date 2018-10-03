import React from "react";
import { StatusBar, View, Text, Button } from "react-native";
import Style from "../general/style/general_Stylesheets";

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'OneModeShot',
	};
	render() {
		return (
			<View style={Style.home}>
				<StatusBar hidden={true} />
				<Button
					onPress={() => this.props.navigation.navigate('Circle')}
					title="The Circle"
					color="#841584"
					accessibilityLabel=""
					style={Style.mainmenu_buttons}
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Circle')}
					title="Settings"
					color="#841584"
					accessibilityLabel=""
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Circle')}
					title="Quit"
					color="#841584"
					accessibilityLabel=""
				/>
			</View>
		)
	}
}