import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';

export default class mainGog extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Header
					title="Jeu du jeu"
					headerStyle={styles.header}
				/>
				<View style={styles.buttons}>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('GoGChoice')
						}}
						text="Choisir un jeu"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('GoGGame')
						}}
						text="Lancer la partie"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('GoGRules')
						}}
						text="Règles"
					/>
				</View>
				<View style={styles.buttons}>
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