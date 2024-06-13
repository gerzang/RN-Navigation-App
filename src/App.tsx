import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import StackNavigator from './presentation/routes/StackNavigator'
import SideNavigator from './presentation/routes/SideNavigator'
import BottomTabsNavigator from './presentation/routes/BottomTabsNavigator'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  )
}

export default App
