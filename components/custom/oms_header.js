import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { global } from "../general/globals";

export default class omsHeader extends React.Component {
	render() {
		const { title, headerStyle } = this.props;
		return (
			<View style={[styles.header, headerStyle]}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		);
	}
}

omsHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: global.BLUE,
		width: global.WIDTH,
		height: global.HEIGHT * 0.1,
	},
	headerText: {
		fontSize: global.WIDTH / 15,
		paddingTop: (global.HEIGHT * .05) - 22.5,
		color: '#ffffff',
		alignSelf: 'center'
	}
});