import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class customButton extends React.Component {
	render() {
		const { text, onPress, buttonStyle, buttonTextStyle, disabled } = this.props;
		return (
			<TouchableOpacity style={[styles.buttonStyle, buttonStyle]}
				onPress={() => (disabled) ? ((disabled == false) ? onPress() : console.log()) : onPress()}
				activeOpacity={(disabled) ? ((disabled == false) ? 0.2 : 1) : 0.2}
			>
				<Text style={[styles.textStyle, buttonTextStyle]}>{text}</Text>
			</TouchableOpacity>
		);
	}
}

customButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	buttonStyle: PropTypes.object,
	buttonTextStyle: PropTypes.object,
	disabled: PropTypes.bool
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: global.oms_width / 25,
		color: '#ffffff',
		textAlign: 'center'
	},
	buttonStyle: {
		padding: 10,
		backgroundColor: global.primary_blue,
		borderRadius: 5,
		margin: 5,
	},
});
