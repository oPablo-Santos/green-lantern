import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Eu te amo martiela!</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Marcellinha</Text>
        <Text>A mais amada</Text>
        <Text>Do mundo</Text>
      </View>
      <StatusBar style="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ffaa",
    justifyContent: "center",
  },
});
