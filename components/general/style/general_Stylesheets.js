import { StyleSheet, Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

export default StyleSheet.create({
	homescreen: {
		backgroundColor: 'hsl(0, 0%, 90%)',
		height: height
	},
	buttons: {
		width: width * 95 / 100,
		alignSelf: 'center',
		top: height * 15 / 100
	},
	logo: {
		alignSelf: 'center',
		top: height * 5 / 100
	},
	header: {
		backgroundColor: '#202646',
		width: width,
		height: height * 10 / 100
	},
	headerText: {
		fontSize: 35,
		paddingTop: (height * 10 / 200) - 22.5,
		color: '#ffffff',
		alignSelf: 'center'
	},
	multipleButtons: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
});
