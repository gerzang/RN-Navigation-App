import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'
import {type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParamList } from '../../routes/StackNavigator'

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' },
    { id: 11, name: 'Product 11' },
    { id: 12, name: 'Product 12' },
    { id: 13, name: 'Product 13' },
    { id: 14, name: 'Product 14' },
    { id: 15, name: 'Product 15' },
    { id: 16, name: 'Product 16' },
    { id: 17, name: 'Product 17' },
    { id: 18, name: 'Product 18' },
    { id: 19, name: 'Product 19' },
    { id: 20, name: 'Product 20' },
]

const ProductsScreen = () => {


    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Products</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
                        label={item.name}
                    />
                )}
            />

            <Text style={{ marginBottom: 10, fontSize: 30 }}>Settings</Text>
            <PrimaryButton
                label='Settings'
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}

export default ProductsScreen
