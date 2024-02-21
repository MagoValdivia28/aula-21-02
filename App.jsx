import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim().length > 0) {
      setTasks([...tasks, {
        id: Math.random().toString(),
        value: task
      }]);
      setTask("");
    }
  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

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
          onPress={addTask}
        >
          <Text style={styles.buttontext} >Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listtitle}>
        {tasks.length === 0 ? (
          <Text style={styles.emptylist}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.list}>Tarefas Cadastradas</Text>
        )}
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {tasks.map((task) => (
            <View
              key={task.id}
              style={styles.listitem}
            >
              <Text style={styles.widthtext}>{task.value}</Text>
              <TouchableOpacity
                onPress={() => removeTask(task.id)}
                style={styles.removebutton}
              >
                <Text className={`text-white`}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
  listtitle: {
    marginBottom: 10,
  },
  emptylist: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
  },
  list: {
    marginTop: 20,
    color: "green",
    fontSize: 20,
  },
  scrollView: {
    marginBottom: 24,
  },
  listitem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 5,
  },
  widthtext: {
    width: "75%",
  },
  removebutton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
}
);
