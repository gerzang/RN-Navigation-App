import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/product/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

;

export type RootStackParamList = {
    Home: undefined;
    Products: undefined;
    Settings: undefined;
    Product: { id: number, name: string };
}

const Stack = createStackNavigator<RootStackParamList>()

const StackNavigator = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
    <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;