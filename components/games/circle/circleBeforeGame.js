import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';

export default class circleBeforeGame extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Header
					title="Choissisez un mode de jeu"
					headerStyle={styles.header}
				/>
				<View style={styles.buttons}>
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
				</View>
				<View style={styles.buttons}>
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

const styles = StyleSheet.create({
	header: {
		marginBottom: global.oms_height * 0.05,
	},
	buttons: {
		width: global.oms_width * 0.95,
		alignSelf: 'center',
		marginBottom: global.oms_width * 0.05,
	}
});