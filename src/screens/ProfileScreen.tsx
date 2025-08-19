import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale'
import { Image } from 'expo-image'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const ProfileScreen = () => {

    const { s, vs } = useScale();

    const translateY = useSharedValue<number>(0)

    const animatedUp = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        }
    })

    return (
        <Animated.ScrollView contentContainerStyle={{ alignItems: 'center', rowGap: vs(25) }} style={[ animatedUp, { flex: 1, padding: vs(20), backgroundColor: 'white' }]}>
            
            <View style={{ width: '100%', height: 'auto', padding: vs(15), flexDirection: 'row', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Image source={require('../../assets/testimage.jpeg')} style={{ width: vs(85), height: vs(85), borderRadius: 100 }} contentFit='contain' />

                <View style={{ height: 'auto', width: '60%', justifyContent: 'space-around' }}>

                    <Text style={{ fontSize: vs(14), fontWeight: '500' }}>Юлия Хегай Леонидовна</Text>

                    <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                        <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>Дата рождения:</Text>
                        <Text style={{ fontSize: vs(14), fontWeight: '500' }}>11.11.1991</Text>
                    </View>                            

                    <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                        <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>Количество детей:</Text>
                        <Text style={{ fontSize: vs(14), fontWeight: '500' }}>1</Text>
                    </View>

                </View>
            
            </View>

            <View style={{ width: '100%', height: 'auto', padding: vs(15), rowGap: vs(15), flexDirection: 'column', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Text style={{ fontSize: vs(14), fontWeight: '500' }} >Личная информация</Text>

                <TextInput 
                    placeholder='Фамилия'
                    style={[{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: '#EFEEFC' }]}
                />

                <TextInput 
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

            <View style={{ width: '100%', height: 'auto', flexDirection: 'row', justifyContent: 'space-between' }}>
                
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: vs(46), backgroundColor: 'white', borderRadius: vs(15), width: '47%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                    <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#E05A9A' }}>Выйти из аккаунта</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: vs(46), backgroundColor: '#E05A9A', borderRadius: vs(15), width: '47%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                    <Text style={{ fontSize: vs(14), color: 'white', fontWeight: '500' }}>Удалить аккаунт</Text>
                </TouchableOpacity>

            </View>

        </Animated.ScrollView>
    )
}

export default ProfileScreen;