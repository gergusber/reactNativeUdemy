import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text>SOMETHING </Text>
      </View>
      {/* inline style */}
      <Text style={
        {
          margin: 20,
          borderWidth: 1,
          borderColor: 'red',
          padding:16
        }
      }>Hello There!!!</Text>
      <Button title='something' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
