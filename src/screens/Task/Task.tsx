import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale';
import { Image } from 'expo-image';
import { isValidImage } from '../../utils/imageValidator';
import { store } from '../../store/store'

const Task = ({ startDate, title, taskTitle, subject, isTimeLimit, givenTime, baseColor, color, image }) => {

    const { s, vs, isTablet } = useScale()

    return (
        <View style={{ backgroundColor: 'white', paddingBottom: vs(60), alignItems: 'center', flexDirection: 'column', padding: isTablet ? vs(14) : vs(12), borderRadius: vs(10), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                    
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: vs(15), height: 'auto', alignItems: 'center', alignSelf: 'flex-start' }}>

                { isValidImage(image) ? 

                    <View style={{ width: vs(90), backgroundColor: baseColor, height: 'auto', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: 100, alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Image source={{uri: image}} contentFit='contain' style={{ height: vs(70), width: vs(55) }} /> 
                    </View>
                :
                    <View style={{ width: vs(85), backgroundColor: baseColor, height: 'auto', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: 100, alignSelf: 'flex-start', alignItems: 'center' }}>
                        <Text style={{ fontSize: vs(50), color: '#36355A' }}>{title?.[0]?.toUpperCase() || ''}</Text>
                    </View>
                }
        
                <View style={{ height: 'auto', width: '65%', justifyContent: 'space-between', rowGap: vs(10) }}>
        
                    <Text style={{ fontSize: isTablet? vs(18) : vs(16), fontWeight: '500', color: '#36355A' }}>{title}</Text>
        
                    <Text style={{ fontSize: isTablet? vs(14) : vs(12), fontWeight: '500', color: '#36355A' }}>{subject}</Text>

                    <Text style={{ fontSize: isTablet? vs(14) : vs(12), fontWeight: '500', color: '#36355A' }}>{taskTitle}</Text>
        
                    <View style={{ flexDirection: 'row', gap: vs(5), alignItems: 'center', overflow: 'hidden' }}>

                        <Text style={{ fontSize: isTablet? vs(14) : vs(12), fontWeight: '500', color: '#36355A' }}>{store.text?.started_at}</Text>

                        <View style={{ padding: vs(5), backgroundColor: baseColor, justifyContent: 'center', width: '45%', alignItems: 'center', borderRadius: 5 }}>
                            <Text style={{ fontSize: isTablet ? vs(12) : vs(10), color: color, fontWeight: '500', lineHeight: 20, textAlign: 'center' }}>{startDate ?? store.text?.labes?.not_install}</Text>
                        </View>

                    </View>
        
                </View>
                
            </View>  

            <View style={{ position: 'absolute', width: '80%', height: 'auto', bottom: 0, alignSelf: 'center', backgroundColor: baseColor, paddingVertical: vs(5), borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <Text numberOfLines={1} style={{ fontSize: isTablet? vs(14) : vs(12), color: color, fontWeight: '500', textAlign: 'center' }}>
                    {store.text?.labes?.time_limit}: {isTimeLimit ? givenTime : store.text?.labes?.not_install}
                </Text>
            </View>
                        
        </View>
    )
}

export default Task 
