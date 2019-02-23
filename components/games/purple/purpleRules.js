import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from '../../custom/oms_header';
import CustomButton from '../../custom/custom_button';
import { global } from "../../general/globals";

export default class purpleRules extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Header title="Règles du purple" />
				<ScrollView style={styles.scrollview}>
					<View style={styles.rulesContainer}>
						<View style={styles.paragraph}>
							<Text style={styles.text}>Chaque joueur, lorsque c'est son tour, va devoir deviner le nombre de cartes de son choix qui seront tirées.</Text>
							<Text style={styles.text}>Par exemple, un joueur dit : "Double purple". (Un Purple représentant une carte rouge ET une carte noire.)</Text>
						</View>
						<View style={styles.paragraph}>
							<Text style={styles.text}>Les 4 cartes du dessus du paquet sont tirés.</Text>
							<Text style={styles.text}>Si le joueur se trompe, il boit le nombre de cartes amassées.</Text>
							<Text style={styles.text}>Si le joueur a raison, il peut faire un seul de ces deux choix:</Text>
							<Text style={styles.text}>- Continuer pour accumuler des cartes pour le prochain joueur au risque de devoir tout boire en se trompant.</Text>
							<Text style={styles.text}>- Dire 'banque': cela met les cartes que le joueur a deviné en jeu pour le prochain. Ces cartes seront donné a boir au prochain joueur qui se trompe.</Text>
						</View>
						<View>
							<Text style={styles.text}>D'autres combinaisons possibles:</Text>
							<Text style={styles.text}>- "Purple et une noire"</Text>
							<Text style={styles.text}>- "Une noire et trois rouges"</Text>
							<Text style={styles.text}>- "Double pourple et deux rouges"</Text>
							<Text style={styles.text}>- ...</Text>
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
		fontSize: global.WIDTH / 20,
		marginBottom: 3
	},
	rulesContainer: {
		padding: 10
	},
	paragraph: {
		marginBottom: 10
	},
	scrollview: {
		height: global.HEIGHT * .8
	}
});