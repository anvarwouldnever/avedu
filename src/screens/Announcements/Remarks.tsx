import { View, Text, Platform } from 'react-native'
import React from 'react'
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';

const Remarks = ({ section }) => {

    const { s, vs } = useScale()

    return (
        <Animated.ScrollView key={section} entering={FadeInLeft} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                            
            {Array.from({ length: 4 }).map((item, index, arr) => {
                const isLast = index === arr.length - 1;

                return (
                    <View key={index} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: Platform.isPad ? vs(14) : vs(12), marginBottom: isLast ? vs(50) : 0, borderRadius: vs(20), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                        
                        <View style={{ width: '70%', height: 'auto', rowGap: Platform.isPad ? vs(14) : vs(12) }}>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Учитель: </Text>
                                
                                <Text ellipsizeMode='tail'  style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Хегай Юлия Леонидовна</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Предмет: </Text>
                                
                                <Text ellipsizeMode='tail' style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Английский язык 2022</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Ребёнок: </Text>
                                
                                <Text ellipsizeMode='tail' style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Хегай Юлия Леонидовна</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', flexDirection: 'column', gap: vs(6), alignSelf: 'flex-end'}}>
                                
                                <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: 'red' }}>Примечание: </Text>
                                
                                <Text numberOfLines={5} style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Отлично подготовилась к уроку</Text>
                                
                            </View>

                        </View>
                        
                        <View style={{height: vs(30), paddingHorizontal: Platform.isPad ? vs(10) : vs(8), backgroundColor: '#EFEEFC', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                            <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#6A5AE0',  }}>24.03.2023</Text>
                        </View>
                    
                    </View>
                )
            })}

        </Animated.ScrollView>
    )
}

export default Remarks