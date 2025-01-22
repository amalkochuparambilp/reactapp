import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";


interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const intialTodo: Todo[] = [
  { id: 1, text: "Learn React", done: true},
  { id: 2, text: "Learn Flutter", done: false},
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(intialTodo);
  return(
    <View style={style.container}>
      <View style={style.todoContainer}>
        <Text style={style.todoHeader}>Todos</Text>

        {todos.map((todo) => (
          <View key={todo.id} style={style.todoCard}>
            <Checkbox.Item label="" status="unchecked"/>
            <Text style={style.todoTitle}>{todo.text}</Text>
          </View>
        ))}
      </View>
      <View>
        <Link asChild href="/create" >
        <TouchableOpacity activeOpacity={0.6} style={style.createTodoBtn}>
          <Text style={style.btnText}>Create Todo</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  todoContainer: {
    marginVertical: 5,
    padding: 10,
  },
  todoHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },

  todoCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    elevation: 2,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  createTodoBtn: {
    backgroundColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})