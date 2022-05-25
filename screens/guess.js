import react, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

function Guess({ navigation, mynumber, setMynumber }) {
	let inputvalue;
	function handleChange(event) {
		inputvalue = event.target.value;
	}
	console.log(mynumber);
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
				<Button title="Dam" onPress={() => setMynumber(inputvalue)} />
				<Button title="Close" onPress={() => setMynumber(inputvalue)} />
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
