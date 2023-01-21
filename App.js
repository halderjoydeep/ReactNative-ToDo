import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isModal, setIsModal] = useState(false);

  function showModal() {
    setIsModal(true);
  }

  function hideModal() {
    setIsModal(false);
  }

  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <TaskInput onAdd={addTask} visible={isModal} onCancel={hideModal} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
        <View style={styles.button}>
          <Button title="Add New Task" color="#65188c" onPress={showModal} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#6C00FF',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  button: {
    marginVertical: 20,
  },
});
