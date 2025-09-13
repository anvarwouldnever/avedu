import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useScale } from '../../hooks/useScale'
import { store } from '../../store/store'

const Back = () => {

    const { s, vs, isTablet } = useScale();

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 'auto', width: '30%', flexDirection: 'row', alignItems: 'center', columnGap: vs(3) }}>
                
            <Ionicons name='chevron-back' color={'#6A5AE0'} size={vs(20)} style={{ marginLeft: -vs(6) }} />
            
            <Text style={{ fontSize: isTablet? vs(18) : vs(16), fontWeight: '500', color: '#6A5AE0' }}>
                {'Назад'}
            </Text>

        </TouchableOpacity>
    )
}

export default Back;