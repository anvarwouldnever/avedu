import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'

const Options = () => {

    const { s, vs, isTablet } = useScale()

    const navigation = useNavigation()

    return (
        <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', height: 'auto', rowGap: vs(20),  marginTop: vs(25), backgroundColor: 'trans', marginBottom: vs(55) }}>
            
            <TouchableOpacity onPress={() => navigation.navigate('Announcements')} style={{ borderRadius: vs(20), backgroundColor: 'white', width: '47%', height: vs(130), alignItems: 'center', justifyContent: 'center', rowGap: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Image contentFit='contain' style={{ width: vs(50), height: vs(50) }} source={require('../../../assets/option.png')} />
                
                <Text style={{ color: 'black', fontSize: isTablet ? vs(16) : vs(14), fontWeight: '600' }}>Примечания</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Tasks')} style={{ borderRadius: vs(20), backgroundColor: 'white', width: '47%', height: vs(130), alignItems: 'center', justifyContent: 'center', rowGap: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Image contentFit='contain' style={{ width: vs(50), height: vs(50) }} source={require('../../../assets/option.png')} />
                
                <Text style={{ color: 'black', fontSize: isTablet ? vs(16) : vs(14), fontWeight: '600' }}>Задания</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Diary')} style={{ borderRadius: vs(20), backgroundColor: 'white', width: '47%', height: vs(130), alignItems: 'center', justifyContent: 'center', rowGap: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Image contentFit='contain' style={{ width: vs(50), height: vs(50) }} source={require('../../../assets/option.png')} />
                
                <Text style={{ color: 'black', fontSize: isTablet ? vs(16) : vs(14), fontWeight: '600' }}>Дневник ребенка</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Schedule')} style={{ borderRadius: vs(20), backgroundColor: 'white', width: '47%', height: vs(130), alignItems: 'center', justifyContent: 'center', rowGap: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                
                <Image contentFit='contain' style={{ width: vs(50), height: vs(50) }} source={require('../../../assets/option.png')} />
                
                <Text style={{ color: 'black', fontSize: isTablet ? vs(16) : vs(14), fontWeight: '600' }}>Расписание уроков</Text>

            </TouchableOpacity>

        </View>
    )
}

export default Options