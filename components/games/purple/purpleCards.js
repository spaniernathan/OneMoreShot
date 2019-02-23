import React from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import PropType from "prop-types";
let CardsImgs = require("../../general/ressources").CardsImgs;
import { global } from "../../general/globals";

export default class purpleCard extends React.Component {
	render() {
		let cardsDisplay = this.props.cards.map((item, key) => {
			let imgSrc = CardsImgs[2][10];
			return (
				<View key={key}>
					<ImageBackground source={imgSrc} style={styles.cardImage}>
					</ImageBackground>
				</View>
			);
		});
		return (
			<View>
				<ScrollView>
					<View
						style={styles.view}>
						{cardsDisplay}
					</View>
				</ScrollView>
			</View>
		);
	}
}

purpleCard.propType = {
	cards: PropType.array.isRequired,
};

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-evenly",
		flex: 1,
		padding: 4,
		flexWrap: 'wrap',
		marginVertical: global.WIDTH * .1
	},
	cardImage: {
		height: (global.WIDTH * .22) * 1.455,
		width: (global.WIDTH * .22),
		alignItems: "center",
		justifyContent: "center",
		borderColor: 'black'
	}
})
