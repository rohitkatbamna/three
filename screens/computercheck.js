import react from "react";
import { View, Text } from "react-native";

function Computercheck({ route, navigation }) {
	const { thisnumber, setMynumber } = route.params;
	console.log(thisnumber);
	return (
		<>
			<View>
				<Text>{thisnumber}</Text>
			</View>
		</>
	);
}
export default Computercheck;
