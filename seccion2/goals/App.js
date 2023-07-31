import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/goalItem'


export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    console.log(text);
    setGoal(text)
  }
  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, { text: goal, id: Math.random().toString() }])
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
        <FlatList 
        alwaysBounceVertical={false} 
        data={goals} 
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        renderItem={itemData => {
          // itemData.index => index of the data .
          // itemData.item => the item that is inside the data
          const { item } = itemData;
          return (
            <GoalItem text={item.text} />
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
