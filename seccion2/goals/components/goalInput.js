import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image
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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image 
        source={require('../assets/images/goal.png')} 
        style={styles.image} />

        <TextInput
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          placeholder='your course goal'
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.bton}>
            <Button
              onPress={addGoalHandler}
              title='Add Goal' 
              color='#b180f0'
              />  
            </View>
          <View style={styles.bton}>
            <Button
              title='Cancel' 
              color='#f31282'
              onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  bton:{
    width:'30%',
    marginHorizontal: 8
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  }
});

export default GoalsInput;