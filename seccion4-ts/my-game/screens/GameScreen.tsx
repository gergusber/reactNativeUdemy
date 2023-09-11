import { Text, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'


const GameScreen = (props: {}) => {
  // const [enteredNumber, setEnteredNumber] = useState('')

  return (
    <View style={styles.rootContainer}>
      <Text>Opponent's Guess</Text>
      {/* GUESS */}
      <View>
        <Text> Hiegher or lower</Text>
        {/* + */}
        {/* - */}
      </View>

      <View>
         {/* Log rounds */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24
  }
});

export default GameScreen
