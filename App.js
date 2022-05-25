import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guess from "./screens/guess";
import Computercheck from "./screens/computercheck";
import NumberContext from "./context/authContext";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NumberContext.Provider value={{ mynumber: NaN }}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={Guess} />
						<Stack.Screen name="ComputerCheck" component={Computercheck} />
					</Stack.Navigator>
				</NavigationContainer>
			</NumberContext.Provider>
		</>
	);
}
