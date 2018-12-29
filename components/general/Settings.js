import React from "react";
import { View } from "react-native";
import CustomButton from '../custom/custom_button';
import Header from '../custom/oms_header';

export default class generalSettings extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Header title="Paramètres" />
				<CustomButton
					onPress={() => this.props.navigation.navigate('Home')}
					text="Retour au menu"
				/>
			</View>
		)
	}
}