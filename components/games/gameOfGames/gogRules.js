import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';

export default class GoGRules extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Header title="Règles du jeu du jeu" />
				<ScrollView style={styles.scrollview}>
					<View style={styles.rulesContainer}>
						<View style={styles.paragraph}>
							<Text style={styles.text}>À chaque tour, une carte est distribué à chaque joueur.</Text>
							<Text style={styles.text}>Le joueur ayant la valeur la plus haute gagne et ne boit pas.</Text>
							<Text style={styles.text}>Ensuite dans l'ordre décroissant des cartes, les joueurs boivent un nombre de gorgées en fonction de leur classement.</Text>
						</View>
						<View>
							<Text style={styles.text}>Lorsqu'une carte apparaît en double ou plus, les joueurs ayant ces cartes sont sauvés et ne boivent pas.</Text>
							<Text style={styles.text}>C'est donc les autres joueurs qui doivent boire en suivant l'ordre et les quantités enoncés plus haut.</Text>
						</View>
					</View>
				</ScrollView>
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

const styles = StyleSheet.create({
	text: {
		fontSize: global.oms_width / 20,
		marginBottom: 3
	},
	rulesContainer: {
		padding: 10
	},
	paragraph: {
		marginBottom: 15
	},
	scrollview: {
		height: global.oms_height * .8
	}
});