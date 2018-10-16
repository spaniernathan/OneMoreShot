import React from "react";
import { View, Text } from "react-native";
import CustomButton from '../../custom/custom_button';


export default class mainPurple extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Text>Purple is in WIP</Text>
				<CustomButton
					onPress={() => this.props.navigation.navigate('Home')}
					text="Retour au menu"
				/>
			</View>
		)
	}
}