import { AsyncStorage } from "react-native";

export function saveCircleRule(key, data) {
	try {
		AsyncStorage.setItem("@CircleRule"+key, data);
		return 1;
	} catch (error) {
		return 84;
	}
}

export function getCircleRules(nb) {
	return AsyncStorage.getItem("@CircleRule"+nb, () => {});
}