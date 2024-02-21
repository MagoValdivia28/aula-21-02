import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [task, setTask] = useState("");

	return (
<View style={styles.container}>
  <View style={styles.form}>
    <TextInput
    style={styles.inputline}
      placeholder="Digite uma nova tarefa"
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity
      style={styles.button}
    >
      <Text style={styles.buttontext} >Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
	);
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputline: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
  },
  }
);
