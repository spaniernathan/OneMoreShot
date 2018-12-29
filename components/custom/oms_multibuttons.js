import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class omsMultiButtons extends React.Component {
	render() {
		return (
			<View style={styles.multipleButtons}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	multipleButtons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}
});
