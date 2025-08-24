import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { homeScreenStore } from '../Home/store/homeScreenStore';

const Button = ({ selectedId, children }) => {

    const { s, vs } = useScale();

    const navigation = useNavigation();

    const handlePress = () => {

        const child = children?.clients.find((child) => child.id === selectedId)
        const name = child?.full_name
        const school = child?.study?.group?.business?.title
        const image = child?.avatar

        homeScreenStore.setChildName(name)
        homeScreenStore.setChildSchool(school)
        homeScreenStore.setChildImage(image)

        SecureStore.setItem('cid', selectedId.toString());

        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })

    }

    return (
        <TouchableOpacity onPress={selectedId ? () => handlePress() : () => {}} style={{ backgroundColor: 'white', width: '70%', opacity: selectedId ? 1 : 0.5, borderWidth: 1, borderColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', height: 'auto', padding: vs(10), borderRadius: vs(15), alignSelf: 'center' }}>
            <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#6A5AE0'  }}>Продолжить</Text>
        </TouchableOpacity>
    )
}

export default Button