import React from "react";
import { View, Text, Dimensions } from "react-native";
import CustomButton from '../../custom/custom_button';
import GeneralStyle from '../../general/style/general_Stylesheets';

let { height, width } = Dimensions.get("window");

export default class circleRules extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<View style={GeneralStyle.header}>
					<Text style={GeneralStyle.headerText}>Règles du purple</Text>
				</View>
				<View>
					<Text style={{
						fontSize: 25,
						alignSelf: 'center'
					}}>
						[INSERER REGLES]
					</Text>
				</View>
				<CustomButton
					onPress={() => {
						this.props.navigation.pop()
					}}
					text="Retour"
				/>
			</View>
		)
	}
}