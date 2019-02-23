import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import { global } from "../../general/globals";

export default class mainPurple extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Header
					title="Purple"
					headerStyle={styles.header}
				/>
				<View style={styles.buttons}>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('PurpleBeforeGame')
						}}
						text="Lancer la partie"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('PurpleRules')
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
		marginBottom: global.HEIGHT * 0.05,
	},
	buttons: {
		width: global.WIDTH * 0.95,
		alignSelf: 'center',
		marginBottom: global.WIDTH * 0.05,
	}
});