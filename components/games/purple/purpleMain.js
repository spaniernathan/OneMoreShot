import React from "react";
import { View, Text, Dimensions } from "react-native";
import CustomButton from '../../custom/custom_button';
import GeneralStyle from '../../general/style/general_Stylesheets';

let { height, width } = Dimensions.get("window");

export default class mainPurple extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<View style={GeneralStyle.header}>
					<Text style={{
						fontSize: 25,
						paddingTop: (height * 10 / 200) - 20,
						color: '#ffffff',
						alignSelf: 'center'
					}}>
						Purple
					</Text>
				</View>
				<View>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('PurpleWithoutCards')
						}}
						text="Lancer la partie"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('PurpleRules')
						}}
						text="Règles"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('Home')
						}}
						text="Retour au menu"
					/>
				</View>
			</View>
		)
	}
}