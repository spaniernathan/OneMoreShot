import React from "react";
import { View } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';

export default class GoGGame extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Header title="Jeu du jeu" />
				<View>
					<CustomButton
						onPress={() => {
							this.props.navigation.pop()
						}}
						text="Retour"
					/>
				</View>
			</View>
		)
	}
}