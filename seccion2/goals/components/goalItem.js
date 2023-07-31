import {

  StyleSheet,
  Text,
  View,
} from 'react-native';

const GoalItem = (props) => {
  return (
  <View style={styles.goalItem}>
    <Text style={styles.textGoalItem}>{props.text}</Text>
  </View>
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