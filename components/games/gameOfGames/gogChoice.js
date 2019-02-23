import React from "react";
import { View } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import { global } from "../../general/globals";

export default class GoGChoice extends React.Component {
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