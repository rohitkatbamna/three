import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guess from "./screens/guess";

import DetailsScreen from "./screens/computercheck";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Guess} />
					<Stack.Screen name="Details" component={DetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
