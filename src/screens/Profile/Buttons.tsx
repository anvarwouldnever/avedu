import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const Buttons = () => {

    const { s, vs } = useScale()

    const navigation = useNavigation()

    const logout = async() => {
        await SecureStore.deleteItemAsync('token')
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    return (
        <View style={{ width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', marginBottom: vs(50) }}>
                        
            <TouchableOpacity onPress={() => logout()} style={{ justifyContent: 'center', alignItems: 'center', height: vs(46), backgroundColor: 'white', borderRadius: vs(15), width: '47%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#E05A9A' }}>Выйти из аккаунта</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: vs(46), backgroundColor: '#E05A9A', borderRadius: vs(15), width: '47%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                <Text style={{ fontSize: vs(14), color: 'white', fontWeight: '500' }}>Удалить аккаунт</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Buttons