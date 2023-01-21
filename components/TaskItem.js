import { Pressable, StyleSheet, View, Text } from 'react-native';

export default function TaskItem({ item, onDelete }) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        onPress={onDelete.bind(this, item.id)}
        android_ripple={styles.rippleEffect}
        style={({ pressed }) => pressed && styles.rippleEffect}
      >
        <Text style={styles.taskItemText}>{item.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,

    elevation: 4,
  },
  taskItemText: {
    color: '#6C00FF',
    padding: 20,
  },
  rippleEffect: {
    color: '#ddc4ff',
    borderRadius: 8,
  },
});
