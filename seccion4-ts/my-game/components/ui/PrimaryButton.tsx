import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string;
}

const PrimaryButton = ({ children }: Props) => {


  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default PrimaryButton
