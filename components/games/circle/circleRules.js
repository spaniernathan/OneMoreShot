import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';

export default class circleRules extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Header title="Règles du cercle" />
				<ScrollView style={styles.scrollview}>
					<View style={styles.rulesContainer}>
						<View style={styles.paragraph}>
							<Text style={styles.text}>Pour jouer, mettez un verre vide au milieu de la table et placez les cartes face cachées autour du verre.</Text>
							<Text style={styles.text}>Dans le sens horaire, chaque joueur prends une carte au hasard et la révèle.</Text>
							<Text style={styles.text}>Une action ou un jeu est alors à faire en fonction de la valeur sur la carte prise.</Text>
						</View>
						<View style={styles.paragraph}>
							<Text style={styles.text}>Tant qu'il reste plus de 5 cartes autour du verre:</Text>
							<Text style={styles.text}>Si, en prenant un carte, un joueur créer un espace entre les cartes, le joueur boit 4 gorgées.</Text>
						</View>
						<View style={styles.paragraph}>
							<Text style={styles.text}>Règle du roi:</Text>
							<Text style={styles.text}>Lorsqu'un joueur pioche un roi:</Text>
							<Text style={styles.text}>- C'est l'un des trois premiers rois piochés: Le joueur doit mettre un ingrédient buvable ou comestible dans le verre au centre.</Text>
							<Text style={styles.text}>- C'est le dernier roi pioché: Le joueur doit boir le contenu du verre au centre.</Text>
						</View>
						<View>
							<Text style={styles.text}>La règle du Roi n'est pas modifiable !</Text>
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
		marginBottom: 10
	},
	scrollview: {
		height: global.oms_height * .8
	}
});