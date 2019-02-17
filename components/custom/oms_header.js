import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

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
		backgroundColor: global.primary_blue,
		width: global.oms_width,
		height: global.oms_height * 0.1,
	},
	headerText: {
		fontSize: global.oms_width / 15,
		paddingTop: (global.oms_height * .05) - 22.5,
		color: '#ffffff',
		alignSelf: 'center'
	}
});