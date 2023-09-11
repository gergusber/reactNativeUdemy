import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react'
import GameScreen from './screens/GameScreen';

export default function App() {
  const [usrNumber, setUsrNumber] = useState(Number);


  const pickedNumberHandler = (pickedNumber: number) => {
    console.log('pICKED NUMBER: ', pickedNumber);
    setUsrNumber(pickedNumber)
  }

  let screen = <StartGameScreen pickNumber={pickedNumberHandler} />


  if (usrNumber) {
    screen = <GameScreen />
  }


  return (
    <LinearGradient
      colors={["#4e0329", '#ddb52f']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        {/* <StartGameScreen pickNumber={pickedNumberHandler} /> */}
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
