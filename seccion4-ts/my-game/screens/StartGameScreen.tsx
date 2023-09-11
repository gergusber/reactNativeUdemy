import { TextInput, View, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'


interface TYPE_START_GAME_SCREEN {
  pickNumber: (n: number) => void
}

const StartGameScreen = (props: TYPE_START_GAME_SCREEN) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const resetInputHandler = () => { setEnteredNumber('') }
  const confirmDataHandler = () => {
    const choseNumber = parseInt(enteredNumber)

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be between 1 and 99",
        [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }] //Button that provides the Alert.alert() that is native error 
      )
      return
    }
    console.log('Valid number');
    props.pickNumber(choseNumber)
  }

  const numberInputHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEnteredNumber(event.nativeEvent.text)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        inputMode='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        onChange={numberInputHandler}
        value={enteredNumber} />

      <View style={styles.containerActions}>
        <View style={styles.btnContainer} >
          <PrimaryButton handler={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton handler={confirmDataHandler}>Confirm</PrimaryButton>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3f022d99',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#a08839',
    borderBottomWidth: 2,
    color: '#a08839',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  containerActions: {
    flexDirection: 'row'
  },
  btnContainer: {
    flex: 1
  }
});

export default StartGameScreen
