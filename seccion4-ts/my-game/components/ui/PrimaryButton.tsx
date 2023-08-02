import { View, Text } from 'react-native'

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

export default PrimaryButton
