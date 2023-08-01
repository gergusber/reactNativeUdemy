import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/goalItem'
import GoalInput from './components/goalInput'


export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals(currentGoals => [...currentGoals, { text: goal, id: Math.random().toString() }])
  }
  
  const deleteItemHandler = (id) => {
    console.log('Delete item');
    setGoals(currentGoals => {
      return currentGoals.filter(x => x.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => {
            const { item } = itemData;
            return (
              <GoalItem id={item.id} text={item.text} onDeleteItem={deleteItemHandler} />
            )
          }} />
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
});
