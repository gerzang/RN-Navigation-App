import React from 'react'
import { Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import IonIcon from '../../components/shared/IonIcon'




const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name="rocket-outline" size={100} color="#900" />
    </View>
  )
}

export default Tab1Screen
