import { View, TextInput, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import { Todo } from "../../components/Todo";
import clipBoard  from "../../../assets/Clipboard.png";
import logo from "../../../assets/Logo.png";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { styles } from "./styles";

type Todos = {
  description: String
  key: string
  isCliked: boolean
}

export function Home() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todos[]>([]);
  const [dones, setDones] = useState<Todos[]>([]);

  function addTodo () {
    if(text == '') {
      return Alert.alert("Não foi possível criar um TODO.", "Escreva algo para cadastrar um TODO!");
    }

    setTodos(prevState => [...prevState, 
      {
        description: text,
        key: uuidv4(),
        isCliked: false 
      }
    ]);

    setText('');
  }

  function handleTodoRemove(item: Todos) {
    Alert.alert("Remoção de Todo.", "Deseja mesmo remover?", [
      {
        text: "Sim",
        onPress: () => {
          setDones(prevState => prevState.filter(el => el.key !== item.key));
          setTodos(prevState => prevState.filter(todos => todos.key !== item.key));
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  function handleCheck(item: Todos) {
    const todoIndex = todos.findIndex((el) => {
      return item.key == el.key
    })

    const tempTodo = [...todos];
    tempTodo[todoIndex].isCliked = !tempTodo[todoIndex].isCliked;
    setTodos(tempTodo);
    setDones(todos.filter(el => el.isCliked == true))
  }

  return (
  <>
    <View style={styles.header}>
      <Image 
        style={styles.img}
        source={logo} 
      />
    </View>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#6B6B6B'
          value={text}
          onChangeText={setText}
        />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.todosContainer}>
        <Text style={styles.openTodo}>Criadas</Text>
        <View style={styles.resultTodo}>
          <Text style={styles.resultFont}>{todos.length}</Text>
        </View>
        <Text style={styles.closedTodo}>Concluídas</Text>
        <View style={styles.resultTodo}>
          <Text style={styles.resultFont}>{dones.length}</Text>
        </View>
      </View>

      <FlatList 
        data={todos}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Todo 
            key={item.key}
            description={item.description}
            isChecked={() => handleCheck(item)}
            onRemove={() => handleTodoRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 12 }}>
            <Text style={styles.line} />
            <Image 
              style={{height: 56, width: 56, marginTop: 30, marginBottom: 20}}
              source={clipBoard} 
            />
            <Text style={{ fontSize: 17, color: '#808080', fontWeight: 'bold' }}>
              Você não tem tarefas cadastradas
            </Text>
            <Text style={{ fontSize: 15, color: '#808080', marginTop: 4 }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  </>
  )
}