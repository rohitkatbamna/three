import react, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guess from "./screens/guess";
import Computercheck from "./screens/computercheck";

const Stack = createNativeStackNavigator();

export default function App() {
	const [mynumber, setMynumber] = useState(NaN);
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={() => (
							<Guess mynumber={mynumber} setMynumber={setMynumber} />
						)}
					/>
					<Stack.Screen
						name="ComputerCheck"
						component={() => (
							<Computercheck mynumber={mynumber} setMynumber={setMynumber} />
						)}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
