import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import MultiButtons from "../../custom/oms_multibuttons";
import PurpleCard from "./purpleCards";

export default class purpleGame extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stack: { purple: 0, red: 0, black: 0 }, currentPlayer: {}, numberCardLeft: 52 };
		this.turn = 0;
		this.currentIndex = 0;
		this.players = null
		this.pickedCards = [];
	}

	componentDidMount() {
		const { players } = this.props.navigation.state.params;
		this.players = players;
		this.turn = players.length;
		this.setState({ currentPlayer: this.players[0] })
	}

	addPurple = () => {
		this.setState({ stack: { purple: this.state.stack.purple + 1, red: this.state.stack.red, black: this.state.stack.black } });
	}

	addRed = () => {
		this.setState({ stack: { purple: this.state.stack.purple, red: this.state.stack.red + 1, black: this.state.stack.black } });
	}

	addBlack = () => {
		this.setState({ stack: { purple: this.state.stack.purple, red: this.state.stack.red, black: this.state.stack.black + 1 } });
	}

	getNumberCards = () => {
		let nbCards = (this.state.stack.purple * 2) + (this.state.stack.red) + (this.state.stack.black);
		this.setState({ numberCardLeft: this.state.numberCardLeft - nbCards, stack: { purple: 0, red: 0, black: 0 } });

		// draw and remove nbCards cards from array / object and store them in pickedCards array
		this.pickedCards = [];
	}

	reset = () => {
		this.setState({ stack: { purple: 0, red: 0, black: 0 } });
	}

	nextPlayer = () => {
		if (this.currentIndex < this.turn - 1) {
			this.currentIndex = this.currentIndex + 1;
		} else if (this.currentIndex == this.turn - 1) {
			this.currentIndex = 0;
		}
		this.setState({ currentPlayer: this.players[this.currentIndex] })
	}

	validate = () => {
		this.getNumberCards;
	}

	bank = () => {
		this.nextPlayer
	}

	render() {
		return (
			<View>
				<Header title="Purple" />
				<View style={styles.informations}>
					<View>
						<Text style={styles.info_text}>{this.state.currentPlayer.name}</Text>
					</View>
					<View>
						<Text style={styles.info_text}>{this.state.numberCardLeft} Cartes restantes</Text>
					</View>
				</View >
				<View style={styles.cards}>
					<PurpleCard
						cards={this.pickedCards}
					/>
				</View>
				<View style={styles.decision}>
					<CustomButton
						onPress={this.bank}
						text="Banque"
						buttonStyle={{
							backgroundColor: '#09991c'
						}}
						disabled={true}
					/>
				</View>
				<View style={styles.counter}>
					<Text style={styles.counter_text}>Purple: {this.state.stack.purple}</Text>
					<Text style={styles.counter_text}>Rouge: {this.state.stack.red}</Text>
					<Text style={styles.counter_text}>Noir: {this.state.stack.black}</Text>
				</View>
				<MultiButtons>
					<CustomButton
						onPress={this.addPurple}
						text="+ 1 Purple"
						buttonStyle={{
							backgroundColor: 'purple'
						}}
					/>
					<CustomButton
						onPress={this.addRed}
						text="+ 1 Rouge"
						buttonStyle={{
							backgroundColor: global.primary_red
						}}
					/>
					<CustomButton
						onPress={this.addBlack}
						text="+ 1 Noir"
						buttonStyle={{
							backgroundColor: '#2d2d2d'
						}}
					/>
					<CustomButton
						onPress={this.validate}
						text="Valider"
						buttonStyle={{
							backgroundColor: '#09991c'
						}}
					/>
				</MultiButtons>
				<MultiButtons>
					<CustomButton
						onPress={() => {
							this.props.navigation.pop()
						}}
						text="Retour"
						buttonStyle={{
							width: global.oms_width * 0.48
						}}
					/>
					<CustomButton
						onPress={this.reset}
						text="Reset"
						buttonStyle={{
							width: global.oms_width * 0.48
						}}
					/>
				</MultiButtons>
			</View >
		)
	}
}

const styles = StyleSheet.create({
	counter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	counter_text: {
		fontSize: global.oms_width / 15
	},
	cards: {
		height: global.oms_height * 0.6
	},
	informations: {
		width: global.oms_width * 0.95,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	info_text: {
		fontSize: global.oms_width / 18
	},
	decision: {
		alignSelf: 'center',
	}
});