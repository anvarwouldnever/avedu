import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { withTiming } from 'react-native-reanimated'
import { useScale } from '../../hooks/useScale'

const PersonalInfo = ({ translateY, defaultFirstName, defaultLastName, defaultFatherName, defaultPhone, defaultAddress, profile }) => {

    const { s, vs } = useScale()

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [fatherName, setFatherName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [address, setAddress] = useState<string>();

    useEffect(() => {
        if (profile) {
            setFirstName(defaultFirstName);
            setLastName(defaultLastName);
            setFatherName(defaultFatherName);
            setPhone(defaultPhone);
            setAddress(defaultAddress);
        }
    }, [profile]);

    return (
        <View style={{ width: '100%', height: 'auto', padding: vs(15), rowGap: vs(15), flexDirection: 'column', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                        
            <Text style={{ fontSize: vs(14), fontWeight: '500' }} >Личная информация</Text>

            <TextInput
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholder='Фамилия'
                style={[{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }]}
            />

            <TextInput 
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                placeholder='Имя'
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }}
                onFocus={() => {
                    translateY.value = withTiming(-50, { duration: 300 }) // вверх на 150px
                }}
                onBlur={() => {
                    translateY.value = withTiming(0, { duration: 300 }) // назад вниз
                }}
            />

            <TextInput 
                value={fatherName}
                onChangeText={(text) => setFatherName(text)}
                placeholder='Отчество'
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }}
                onFocus={() => {
                    translateY.value = withTiming(-130, { duration: 300 }) // вверх на 150px
                }}
                onBlur={() => {
                    translateY.value = withTiming(0, { duration: 300 }) // назад вниз
                }}
            />

            <Text style={{ fontSize: vs(14), fontWeight: '500' }}>Контактная информация</Text>

            <TextInput
                value={phone} 
                onChangeText={(text) => setPhone(text)}
                placeholder='Номер телефона'
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }}
                onFocus={() => {
                    translateY.value = withTiming(-235, { duration: 300 }) // вверх на 150px
                }}
                onBlur={() => {
                    translateY.value = withTiming(0, { duration: 300 }) // назад вниз
                }}
            />

            <TextInput 
                value={address}
                onChangeText={(text) => setAddress(text)}
                placeholder='Адрес проживания'
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }}
                onFocus={() => {
                    translateY.value = withTiming(-235, { duration: 300 }) // вверх на 150px
                }}
                onBlur={() => {
                    translateY.value = withTiming(0, { duration: 300 }) // назад вниз
                }}
            />

        </View>
    )
}

export default PersonalInfo