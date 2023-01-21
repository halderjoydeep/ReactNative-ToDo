import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

export default function TaskList(props) {
  return (
    <View style={styles.taskContainer}>
      <FlatList
        data={props.tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} onDelete={props.onDelete} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 5,
  },
});
