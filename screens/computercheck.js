import react, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	Alert,
	Pressable,
	ScrollView,
} from "react-native";
import ComputerWins from "./computerWins";

function DetailsScreen({ route, navigation }) {
	const { mynumber } = route.params;
	const [computerguess, setComputerguess] = useState([
		Math.floor(Math.random() * 100),
	]);
	const [guesscorrect, setGuesscorrect] = useState(false);
	function NextGuessplus() {
		let newguess;
		while (true) {
			if (mynumber == computerguess[computerguess.length - 1]) {
				setGuesscorrect(true);
				break;
			}
			newguess = Math.floor(Math.random() * 100);
			if (newguess >= computerguess[computerguess.length - 1]) {
				newguess = Math.floor(Math.random() * 100 + 1);
			} else {
				setComputerguess([...computerguess, newguess]);
				break;
			}
		}
		if (mynumber == computerguess[computerguess.length - 1]) {
			setGuesscorrect(true);
		}
	}
	function NextGuessminus() {
		let newguess;
		while (true) {
			if (mynumber == computerguess[computerguess.length - 1]) {
				setGuesscorrect(true);
				break;
			}
			newguess = Math.floor(Math.random() * 100 + 1);
			if (newguess <= computerguess[computerguess.length - 1]) {
				newguess = Math.floor(Math.random() * 100);
			} else {
				setComputerguess([...computerguess, newguess]);
				break;
			}
		}
	}
	if (guesscorrect) {
		return <ComputerWins />;
	}

	return (
		<>
			{guesscorrect ? <ComputerWins /> : <></>}
			<View style={styles.container}>
				<Text style={styles.computercheck}>
					My Number to guess for Computer
				</Text>
				<Text style={styles.mynumber}>{mynumber}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.computercheck}>Computer's Guess</Text>
				<Text style={styles.mynumber}>
					{computerguess[computerguess.length - 1]}
				</Text>
			</View>

			<View style={styles.container}>
				<Text style={styles.tellcomputertext}>
					Tell Computer whether guess is high or low
				</Text>
				<View style={styles.plusMinusButtonView}>
					<Pressable style={styles.button} onPress={NextGuessplus}>
						<Text style={styles.plusminusbutton}>+</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={NextGuessminus}>
						<Text style={styles.plusminusbutton}>-</Text>
					</Pressable>
				</View>
			</View>
			<ScrollView style={styles.container}>
				{computerguess.map((num, index) => (
					<Text style={styles.computerguesslist} key={index}>
						Computer guess is {num}
					</Text>
				))}
			</ScrollView>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "lightblue",
		margin: 10,
		borderRadius: 10,
		borderWidth: 4,
	},
	mynumber: {
		fontSize: 40,
		textAlign: "center",
		fontWeight: "bold",
	},
	computercheck: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	tellcomputertext: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	plusMinusButtonView: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	plusminusbutton: {
		fontSize: 50,
		fontWeight: "bold",
	},
	computerguesslist: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
});
export default DetailsScreen;
