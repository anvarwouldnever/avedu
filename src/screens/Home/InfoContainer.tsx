import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale';
import { Image } from 'expo-image';

const InfoContainer = () => {
    
    const { s, vs } = useScale();

    return (
        <View style={{width: '100%', height: 'auto', borderRadius: vs(30), backgroundColor: '#9087E5', padding: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: vs(15), justifyContent: 'space-between' }}>
                
                <View style={{ width: '60%', gap: vs(14), justifyContent: 'space-between' }}>
                    
                    <Text style={{fontSize: Platform.isPad? vs(18) : vs(16), color: 'white', fontWeight: '600', lineHeight: Platform.isPad? vs(22) : s(22), marginBottom: vs(5), flexShrink: 1}}>Андреева Анна Алексеевна</Text>

                    <Text style={{fontSize: Platform.isPad? vs(18) : vs(14), color: 'white', fontWeight: '500', lineHeight: Platform.isPad? vs(22) : s(22)}}>Школа 160  "1 А" Класс</Text>

                    {/* <Text style={{fontSize: Platform.isPad? vs(16) : s(16), color: 'white', fontWeight: '500', lineHeight: Platform.isPad? vs(22) : s(22)}}>1 А Класс</Text> */}

                    <View style={{padding: vs(10), backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: '60%' }}>
                        <Text style={{fontSize: Platform.isPad? vs(20) : s(14), color: 'white', fontWeight: '600'}}>ID 1477</Text>
                    </View>
                
                </View>

                <Image style={{ borderRadius: 100, width: s(100), height: s(100)}} source={require('../../../assets/testimage.jpeg')} contentFit='contain' />

            </View>

        </View>
    )
}

export default InfoContainer;