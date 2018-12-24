import React from "react";
import { View, Text, Dimensions } from "react-native";
import CustomButton from '../../custom/custom_button';
import Style from '../../general/style/general_Stylesheets';

let { height, width } = Dimensions.get("window");

export default class circleBeforeGame extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<View style={Style.header}>
					<Text style={{
						fontSize: 25,
						paddingTop: (height * 10 / 200) - 20,
						color: '#ffffff',
						alignSelf: 'center'
					}}>
						Choissisez un mode de jeu:
					</Text>
				</View>
				<View>
					<CustomButton
						onPress={() => {
							this.resetCardBoard
							this.props.navigation.navigate('CircleWithCards')
						}}
						text="J'ai des cartes"
					/>
					<CustomButton
						onPress={() => {
							this.resetCardBoard
							this.props.navigation.navigate('CircleWithoutCards')
						}}
						text="Je n'ai pas de cartes"
					/>
					<CustomButton
						onPress={() => {
							this.resetCardBoard
							this.props.navigation.navigate('CircleRules')
						}}
						text="Règles"
					/>
					<CustomButton
						onPress={() => {
							this.resetCardBoard
							this.props.navigation.navigate('Home')
						}}
						text="Retour au menu"
					/>
				</View>
			</View>
		)
	}
}