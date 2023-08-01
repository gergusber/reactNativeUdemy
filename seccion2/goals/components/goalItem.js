import {
  Pressable,
  Touchable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GoalItem = (props) => {

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'dddddd', }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => {
          pressed && styles.pressedItem
        }}
      >
        <Text style={styles.textGoalItem}>{props.text}</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  textGoalItem: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});

export default GoalItem