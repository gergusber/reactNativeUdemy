import {
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';
import { useState } from 'react';

const GoalsInput = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text)
  }

  const addGoalHandler = () => {
    props.addGoal(goal)
    setGoal('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.TextInput}
        placeholder='your course goal' 
        value={goal} 
      />

      <Button
        onPress={addGoalHandler}
        title='Add Goal' />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});

export default GoalsInput;