import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import TopTabsNavigator from './TopTabsNavigator';
import StackNavigator from './StackNavigator';
import IonIcon from '../components/shared/IonIcon';


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: globalColors.background }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonIcon name="accessibility-outline" color={color} size={30} />) }}
                component={Tab1Screen} />
            <Tab.Screen
                name="Tab2"
                options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonIcon name="airplane-outline" color={color} size={30} />) }}
                component={TopTabsNavigator} />
            <Tab.Screen
                name="Tab3"
                options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonIcon name="bar-chart-outline" color={color} size={30} />) }}
                component={StackNavigator} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator
