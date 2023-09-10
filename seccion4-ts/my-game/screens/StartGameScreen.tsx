import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

const StartGameScreen = () => {
  const handler1 = () => {

  }

  const handler2 = () => {

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        inputMode='numeric'
        autoCapitalize='none'
        autoCorrect={false} />

      <View style={styles.containerActions}>
        <View style={styles.btnContainer} >
          <PrimaryButton handler={handler1}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton handler={handler2}>Confirm</PrimaryButton>
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
