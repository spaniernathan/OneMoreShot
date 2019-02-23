import React from "react";
import { Modal, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView } from "react-native";
import CustomButton from '../../custom/custom_button';
import Header from '../../custom/oms_header';
import * as save from '../../general/save';
import { global } from "../../general/globals";
let GameCards = require('./circleRessources').GameCards;

let Rules = [
	{
		key: '1',
		title: '1 (As)',
		rule: ""
	},
	{
		key: '2',
		title: '2',
		rule: ""
	},
	{
		key: '3',
		title: '3',
		rule: ""
	},
	{
		key: '4',
		title: '4',
		rule: ""
	},
	{
		key: '5',
		title: '5',
		rule: ""
	},
	{
		key: '6',
		title: '6',
		rule: ""
	},
	{
		key: '7',
		title: '7',
		rule: ""
	},
	{
		key: '8',
		title: '8',
		rule: ""
	},
	{
		key: '9',
		title: '9',
		rule: ""
	},
	{
		key: '10',
		title: '10',
		rule: ""
	},
	{
		key: '11',
		title: '11 (Valet)',
		rule: ""
	},
	{
		key: '12',
		title: '12 (Reine)',
		rule: ""
	},
	{
		key: '13',
		title: '13 (Roi)',
		rule: ""
	}
];

save.getCircleRules(1).then((val)=>{Rules[0].rule = val;});
save.getCircleRules(2).then((val)=>{Rules[1].rule = val;});
save.getCircleRules(3).then((val)=>{Rules[2].rule = val;});
save.getCircleRules(4).then((val)=>{Rules[3].rule = val;});
save.getCircleRules(5).then((val)=>{Rules[4].rule = val;});
save.getCircleRules(6).then((val)=>{Rules[5].rule = val;});
save.getCircleRules(7).then((val)=>{Rules[6].rule = val;});
save.getCircleRules(8).then((val)=>{Rules[7].rule = val;});
save.getCircleRules(9).then((val)=>{Rules[8].rule = val;});
save.getCircleRules(10).then((val)=>{Rules[9].rule = val;});
save.getCircleRules(11).then((val)=>{Rules[10].rule = val;});
save.getCircleRules(12).then((val)=>{Rules[11].rule = val;});
save.getCircleRules(13).then((val)=>{Rules[12].rule = val;});

export default class circleCardsRules extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			editVisible: false,
			ClickedCard: {},
			editInput: ''

		};
	}

	componentWillUpdate() {
		save.getCircleRules(1).then((val)=>{Rules[0].rule = val;});
		save.getCircleRules(2).then((val)=>{Rules[1].rule = val;});
		save.getCircleRules(3).then((val)=>{Rules[2].rule = val;});
		save.getCircleRules(4).then((val)=>{Rules[3].rule = val;});
		save.getCircleRules(5).then((val)=>{Rules[4].rule = val;});
		save.getCircleRules(6).then((val)=>{Rules[5].rule = val;});
		save.getCircleRules(7).then((val)=>{Rules[6].rule = val;});
		save.getCircleRules(8).then((val)=>{Rules[7].rule = val;});
		save.getCircleRules(9).then((val)=>{Rules[8].rule = val;});
		save.getCircleRules(10).then((val)=>{Rules[9].rule = val;});
		save.getCircleRules(11).then((val)=>{Rules[10].rule = val;});
		save.getCircleRules(12).then((val)=>{Rules[11].rule = val;});
		save.getCircleRules(13).then((val)=>{Rules[12].rule = val;});
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	setEditVisible(visible) {
		this.setState({ editVisible: visible });
	}

	setClickedCard(ClickedCard) {
		this.setState({ ClickedCard: ClickedCard });
	}

	saveRule() {
		let key = this.state.ClickedCard.key;
		let newRule = this.state.editInput;
		save.saveCircleRule(key, newRule);
	}

	resetRules() {
		for (let i = 1; i < 14; i++) {
			save.saveCircleRule(i, GameCards[i].rule);
		}
		this.forceUpdate();
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
							height: global.HEIGHT / 16,
							width: global.WIDTH - 10,
							backgroundColor: global.BLUE,
							paddingTop: (global.HEIGHT / (16 * 2)) - 16,
							margin: 2,
							alignSelf: 'center'
						}}
							onPress={() => {
								this.setClickedCard(item); this.setModalVisible(true)
							}}
						>
							<Text style={{
								fontSize: global.WIDTH / 17,
								color: '#ffffff',
								textAlign: 'center',
							}}>{item.title}</Text>
						</TouchableOpacity>
					)}
				/>
				<CustomButton
					onPress={() => { this.resetRules(); }}
					text="Reset"
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
						<Header title={"Règle de la carte " + this.state.ClickedCard.title} />
						<ScrollView>
							<View style={{
								alignSelf: 'center',
								width: global.WIDTH * .95,
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
								width: global.WIDTH * .8,
								marginVertical: 10
							}}>
								<Text style={{
									alignSelf: 'center',
									fontSize: 25
								}}>
									{this.state.ClickedCard.rule}
								</Text>
							</View>
						</ScrollView>
						<CustomButton
							onPress={() => { this.setEditVisible(true); }}
							text="Editer"
						/>
						<CustomButton
							onPress={() => { this.setModalVisible(false); }}
							text="Retour"
						/>
					</View>
				</Modal>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.editVisible}
					onRequestClose={() => { this.setEditVisible(false); }}
				>
					<View style={{
						height: global.HEIGHT * .5
					}}>
						<Header title={"Edition de la carte " + this.state.ClickedCard.title} />
						<ScrollView>
							<View style={{
								alignSelf: 'center',
								width: global.WIDTH * .95,
								marginVertical: 5
							}}>
								<TextInput
									style={{
										height: 40,
										borderColor: 'gray',
										borderWidth: 1
									}}
									onChangeText={(text) => this.setState({ editInput: text })}
									value={this.state.editInput}
								/>
							</View>
						</ScrollView>
						<CustomButton
							onPress={() => {
								this.saveRule();
								this.setEditVisible(false);
								this.setModalVisible(false);
							}}
							text="Sauvegarder"
						/>
						<CustomButton
							onPress={() => { this.setEditVisible(false); }}
							text="Annuler"
						/>
					</View>
				</Modal>
			</View>
		);
	}
}