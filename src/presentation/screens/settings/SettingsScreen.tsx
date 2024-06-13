import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>Settings Screen</Text>

      <PrimaryButton
        label='Back'
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label='Back Home'
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}

export default SettingsScreen
