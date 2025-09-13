import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale';
import { Image } from 'expo-image';
import { homeScreenStore } from './store/homeScreenStore';
import * as SecureStore from 'expo-secure-store';
import { isValidImage } from '../../utils/imageValidator';
import { store } from '../../store/store';
import { observer } from 'mobx-react-lite';

const InfoContainer = () => {
    
    const { s, vs, isTablet } = useScale();

    const cid = SecureStore.getItem('cid');
    const image = homeScreenStore?.childImage;
    const school = store.text?.title_school

    return (
        <View style={{width: '100%', height: 'auto', borderRadius: vs(30), backgroundColor: '#9087E5', padding: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: vs(15), justifyContent: 'space-between' }}>
                
                <View style={{ width: '60%', gap: vs(14), justifyContent: 'space-between' }}>
                    
                    <Text style={{fontSize: isTablet? vs(18) : vs(16), color: 'white', fontWeight: '600', lineHeight: isTablet? vs(22) : s(22), marginBottom: vs(5), flexShrink: 1}}>{homeScreenStore.childName}</Text>

                    <Text style={{fontSize: isTablet? vs(18) : vs(14), color: 'white', fontWeight: '500', lineHeight: isTablet? vs(22) : s(22)}}>{school} {homeScreenStore.childSchool}</Text>

                    {/* <Text style={{fontSize: isTablet? vs(16) : s(16), color: 'white', fontWeight: '500', lineHeight: isTablet? vs(22) : s(22)}}>1 А Класс</Text> */}

                    <View style={{padding: vs(10), backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: '60%' }}>
                        <Text style={{fontSize: isTablet? vs(16) : vs(14), color: 'white', fontWeight: '600'}}>ID {cid}</Text>
                    </View>
                
                </View>

                {  isValidImage(image) ?
                
                    <Image style={{ borderRadius: 100, width: s(100), height: s(100)}} source={{ uri: image }} contentFit='contain' /> 
                : 
                    <View style={{ width: vs(100), height: vs(100), backgroundColor: '#6A5AE0', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: vs(50), color: 'white' }}>{homeScreenStore.childName?.[0]?.toUpperCase() || ''}</Text>
                    </View>
                }

            </View>

        </View>
    )
}

export default observer(InfoContainer);