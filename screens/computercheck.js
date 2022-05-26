import react, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen({ route, navigation }) {
	/* 2. Get the param */
	const { mynumber } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>{mynumber}</Text>
		</View>
	);
}
export default DetailsScreen;
