import react, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import NumberContext from "../context/authContext";

function Guess({ navigation }) {
	let inputvalue;
	function handleChange(event) {
		inputvalue = event.target.value;
	}
	const { myNumber, setMynumber } = useContext(NumberContext);
	console.log(myNumber);
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.guessnumber_text}>Guess My number</Text>
			</View>
			<View style={styles.enternumber_container}>
				<Text style={styles.enternumber_text}>Enter a number</Text>
				<TextInput
					placeholder="So What's the Number ?"
					keyboardType="numeric"
					style={styles.enternumber_input}
					onChange={handleChange}
				/>
			</View>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					alignContent: "center",
					justifyContent: "space-around",
				}}>
				<Button title="Close" />
				<Button
					title="Sumbit"
					onPress={() => {
						setMynumber(inputvalue);
						navigation.navigate("ComputerCheck");
					}}
				/>
			</View>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e35d5b",
		margin: 30,
		borderRadius: 10,
	},
	guessnumber_text: {
		color: "yellow",
		fontSize: 30,
		borderColor: "black",
		borderWidth: 5,
		textAlign: "center",
		borderRadius: 10,
	},
	enternumber_container: {
		borderRadius: 10,
		backgroundColor: "lightblue",
		border: 10,
		borderWidth: 5,
		margin: 5,
	},
	enternumber_text: {
		textAlign: "center",
		fontSize: 25,
	},
	enternumber_input: {
		textAlign: "center",
		fontSize: 30,
	},
});

export default Guess;
