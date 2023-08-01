import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/goalItem'
import GoalInput from './components/goalInput'


export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals(currentGoals => [...currentGoals, { text: goal, id: Math.random().toString() }])
    endAddGoalHandler();
  }

  const deleteItemHandler = (id) => {
    console.log('Delete item');
    setGoals(currentGoals => {
      return currentGoals.filter(x => x.id !== id);
    })
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }
  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }


  return (
    <>
      <StatusBar style='dark'/>
      
      <View style={styles.appContainer}>
        <Button
          title='Add new goal'
          color='#a065ec'
          onPress={startAddGoalHandler} />

        <GoalInput
          addGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible} />

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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
