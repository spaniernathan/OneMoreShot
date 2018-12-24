import React from "react";
import { View, Text } from "react-native";
import CustomButton from '../../custom/custom_button';
import GeneralStyle from '../../general/style/general_Stylesheets';

export default class circleRules extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<View style={GeneralStyle.header}>
					<Text style={GeneralStyle.headerText}>Règles du cercle</Text>
				</View>
				<View style={{}}>
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