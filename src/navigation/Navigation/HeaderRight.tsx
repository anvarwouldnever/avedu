import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useScale } from '../../hooks/useScale'
import { useNavigation } from '@react-navigation/native'

const HeaderRight = ({ openSlider }) => {

    const { s, vs } = useScale()

    const navigation = useNavigation()

    const toChildren = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Children' }],
        })
    }

    const toProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={{marginRight: 15, flexDirection: 'row', columnGap: vs(5), alignItems: 'center'}}>
                    
            <TouchableOpacity
                onPress={() => toChildren()}
                activeOpacity={0.8}
            >
                <Ionicons 
                    size={vs(50)}
                    name='sync-circle-outline'
                    color={'#6A5AE0'}
                />
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => toProfile()}
                activeOpacity={0.8}
            >
                <Ionicons 
                    size={vs(50)}
                    name='person-circle'
                    color={'#6A5AE0'}
                />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => openSlider()}>
                <Ionicons name="menu" size={vs(50)} color="black" />
            </TouchableOpacity>

        </View>
    )
}

export default HeaderRight