import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, View, useWindowDimensions } from "react-native"
import BottomTabsNavigator from './BottomTabsNavigator';
import IonIcon from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();
const SideNavigator = () => {

    const dimentions = useWindowDimensions();

    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: dimentions.width > 768 ? 'permanent' : 'slide',
                headerShown: false,
                // drawerType: 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen
                options={{ drawerIcon: ({ color }) => <IonIcon name="bonfire-outline" color={color} /> }}
                name="Tabs"
                component={BottomTabsNavigator} />
            <Drawer.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ drawerIcon: ({ color }) => <IonIcon name="person-circle-outline" color={color} /> }} />
        </Drawer.Navigator>
    )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView >
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 100
                }}>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default SideNavigator
