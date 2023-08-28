import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'

interface Props {
  children: string;
  handler: () => void,
}

const PrimaryButton = ({ children, handler }: Props) => {

  return (
    <View style={styles.btnOutercontainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.btnInnerContainer, styles.pressed] : styles.btnInnerContainer}
        onPress={handler}
        android_ripple={{ color: '#640233' }}
        >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  btnInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton
