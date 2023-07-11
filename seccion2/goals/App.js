import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    console.log(text);
    setGoal(text)
  }
  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, goal])
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          placeholder='your course goal' />

        <Button
          onPress={addGoalHandler}
          title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((x, index) => {
            return <View style={styles.goalItem} key={index}>
              <Text style={styles.textGoalItem}>{x}</Text>
            </View>
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
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
