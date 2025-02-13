import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import IonIcon from './IonIcon';
import { globalColors } from '../../theme/theme';

const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable 
                style={{marginLeft: 5}}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IonIcon name="menu-outline"  color={globalColors.primary} size={30}/>
                </Pressable>
            )
        })
    }, [])

    return (
        <></>
    )
}

export default HamburgerMenu
