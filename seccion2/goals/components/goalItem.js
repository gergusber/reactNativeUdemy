import {
  Pressable,
  Touchable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const GoalItem = (props) => {

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.textGoalItem}>{props.text}</Text>
      </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#5e0acc'
  },
  textGoalItem: {
    color: 'white',
  }
});

export default GoalItem