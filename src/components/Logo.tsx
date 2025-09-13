import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react'
import { navigationStore } from '../navigation/NavigationStore';
import { TouchableOpacity } from 'react-native';

const Logo = () => {

    const navigation = useNavigation();

    const goHome = () => {
        const state = navigation.getState()
        const currentRoute = state.routes[state.index]?.name
    
        if (currentRoute !== 'Home') {
            navigationStore.setOpenSlider(false)
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            })
        }
    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => goHome()}>
            <Image contentFit='contain' source={require('../../assets/logo.png')} style={{width: 100, height: 60, marginLeft: 15}}/>
        </TouchableOpacity>
    )
}

export default Logo;