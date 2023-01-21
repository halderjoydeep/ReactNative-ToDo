import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

export default function TaskInput(props) {
  const [task, setTask] = useState('');

  function inputChangeHandler(enteredText) {
    setTask(enteredText);
  }

  function addTask() {
    if (task.trim().length === 0) {
      return;
    }
    const uniqueId = new Date().valueOf();

    const newTask = { title: task, id: uniqueId };
    props.onAdd(newTask);
    props.onCancel();
    setTask('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter new task..."
          placeholderTextColor="#34195c"
          onChangeText={inputChangeHandler}
          value={task}
        />
        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTask} color="#6C00FF" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#db3d68" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#29104d',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ffe6ec',
    backgroundColor: '#ffe6ec',
    color: '#1b0b33',
    padding: 10,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
});
