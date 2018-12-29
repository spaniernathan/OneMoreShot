import React from "react";
import { View, Text, Platform, StyleSheet, Animated, ScrollView } from 'react-native';
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import MultiButtons from "../../custom/oms_multibuttons";

export default class purpleBeforeGame extends React.Component {
	constructor(props) {
		super(props);
		this.state = { valueArray: [] }
		this.index = 0;
		this.animatedValue = new Animated.Value(0);
		this.clickedIndex = 0;
	}

	addMore = () => {
		this.animatedValue.setValue(0);
		let newlyAddedValue = { name: "PlayerName" + this.index }
		this.setState({ valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
			Animated.timing(
				this.animatedValue, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true
				}).start(() => {
					this.index = this.index + 1;
				});
		});
	}

	removeOne = () => {
		this.animatedValue.setValue(0);
		let array = [...this.state.valueArray];
		array.splice(this.clickedIndex, 1);
		this.index = this.index - 1;
		this.setState({ valueArray: [...array] });
	}

	render() {
		const animationValue = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-59, 0]
		});
		let newArray = this.state.valueArray.map((item, key) => {
			if ((key) == this.index) {
				return (
					<Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
						<CustomButton
							onPress={() => {
								this.clickedIndex = key;
								this.removeOne();
							}}
							text="Supprimer"
							buttonStyle={{
								backgroundColor: global.primary_red
							}}
						/>
						<Text style={styles.text}>{item.name} {key}</Text>
					</Animated.View>
				);
			}
			else {
				return (
					<View key={key} style={styles.viewHolder}>
						<CustomButton
							onPress={() => {
								this.clickedIndex = key;
								this.removeOne();
							}}
							text="Supprimer"
							buttonStyle={{
								backgroundColor: global.primary_red
							}}
						/>
						<Text style={styles.text}>{item.name} {key}</Text>
					</View>
				);
			}
		});

		return (
			<View style={styles.container}>
				<Header title="Ajoutez les joueurs" />
				<ScrollView>
					<View style={{ flex: 1, padding: 4 }}>
						{newArray}
					</View>
				</ScrollView>
				<MultiButtons>
					<CustomButton
						onPress={() => {
							this.props.navigation.pop()
						}}
						text="Retour"
					/>
					<CustomButton
						onPress={this.addMore}
						text="Ajouter un joueur"
					/>
					<CustomButton
						onPress={() => {
							this.props.navigation.navigate('PurpleGame', { players: this.state.valueArray })
						}}
						text="Lancer"
					/>
				</MultiButtons>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: (Platform.OS == 'ios') ? 20 : 0
	},
	viewHolder: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 55,
		backgroundColor: global.primary_blue,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 4
	},
	text: {
		color: 'white',
		fontSize: global.oms_width / 15
	}
});