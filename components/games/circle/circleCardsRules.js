import React from "react";
import { Modal, Text, View, Alert, FlatList, TouchableOpacity, Dimensions } from "react-native";
import CustomButton from '../../custom/custom_button';
import Style from './style/circle_Stylesheets';
import GeneralStyle from '../../general/style/general_Stylesheets';
GameCards = require("./circleRessources.js").GameCards;
let { height, width } = Dimensions.get("window");

let Rules = [
	{
		key: '1',
		title: '1 (As)',
		rule: GameCards[1].rule
	},
	{
		key: '2',
		title: '2',
		rule: GameCards[2].rule
	},
	{
		key: '3',
		title: '3',
		rule: GameCards[3].rule
	},
	{
		key: '4',
		title: '4',
		rule: GameCards[4].rule
	},
	{
		key: '5',
		title: '5',
		rule: GameCards[5].rule
	},
	{
		key: '6',
		title: '6',
		rule: GameCards[6].rule
	},
	{
		key: '7',
		title: '7',
		rule: GameCards[7].rule
	},
	{
		key: '8',
		title: '8',
		rule: GameCards[8].rule
	},
	{
		key: '9',
		title: '9',
		rule: GameCards[9].rule
	},
	{
		key: '10',
		title: '10',
		rule: GameCards[10].rule
	},
	{
		key: '11',
		title: '11 (Valet)',
		rule: GameCards[11].rule
	},
	{
		key: '12',
		title: '12 (Reine)',
		rule: GameCards[12].rule
	},
	{
		key: '13',
		title: '13 (Roi)',
		rule: GameCards[13].rule
	},
];

export default class circleCardsRules extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			ClickedCard: {}
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	setClickedCard(ClickedCard) {
		this.setState({ ClickedCard: ClickedCard });
	}

	render() {
		return (
			<View>
				<FlatList
					data={Rules}
					renderItem={({ item }) => (
						<TouchableOpacity activeOpacity={.5} style={{
							borderRadius: 10,
							borderWidth: 1,
							borderColor: 'black',
							height: height / 15,
							width: width - 10,
							backgroundColor: '#202646',
							paddingTop: (height / (15 * 2)) - 15,
							margin: 2,
							alignSelf: 'center'
						}}
							onPress={() => {
								this.setClickedCard(item); this.setModalVisible(true)
							}}
						>
							<Text style={{
								fontSize: 20,
								color: '#ffffff',
								textAlign: 'center',
							}}>{item.title}</Text>
						</TouchableOpacity>
					)}
				/>
				<CustomButton
					onPress={() => { this.props.navigation.pop() }}
					text="Retour"
				/>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => { this.setModalVisible(false); }}>
					<View>
						<View style={GeneralStyle.header}>
							<Text style={GeneralStyle.headerText}>
								Règle de la carte {this.state.ClickedCard.title}
							</Text>
						</View>
						<View style={{
							alignSelf: 'center',
							width: width * 95 / 100,
							marginVertical: 5
						}}>
							<Text style={{
								alignSelf: 'center',
								fontSize: 30
							}}>
								Règle:
							</Text>
						</View>
						<View style={{
							alignSelf: 'center',
							width: width * 80 / 100,
							marginVertical: 10
						}}>
							<Text style={{
								alignSelf: 'center',
								fontSize: 25
							}}>
								{this.state.ClickedCard.rule}
							</Text>
						</View>
						<CustomButton
							onPress={() => {
								Alert.alert(
									'En cours de développement',
									'Coming soon'
								)
							}}
							text="Editer"
						/>
						<CustomButton
							onPress={() => { this.setModalVisible(false); }}
							text="Retour"
						/>
					</View>
				</Modal>
			</View>
		);
	}
}