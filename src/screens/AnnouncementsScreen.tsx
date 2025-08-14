import { View, Text, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'

const AnnouncementsScreen = () => {

    const { s, vs } = useScale();

    const [section, setSection] = useState<string>('примечания')

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: vs(20), backgroundColor: 'white', rowGap: vs(25) }}>

            <View style={{ width: '100%', backgroundColor: 'white', height: vs(56), flexDirection: 'row' }}>

                <TouchableOpacity onPress={() => setSection('примечания')} style={{width: '50%', height: '100%', borderBottomWidth: 1, borderColor: section === 'примечания' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ padding: vs(10), fontSize: Platform.isPad ? vs(18) : vs(16), color: section === 'примечания' ? '#6A5AE0' : '#333333' }}>Примечания</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSection('объявления')} style={{width: '50%', height: '100%', borderBottomWidth: 1, borderColor: section === 'объявления' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ padding: vs(10), fontSize: Platform.isPad ? vs(18) : vs(16), color: section === 'объявления' ? '#6A5AE0' : '#333333' }}>Объявления</Text>
                </TouchableOpacity>

            </View>

            {section === 'примечания' ?  

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                    
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

                </ScrollView>
            :
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                    
                    {Array.from({ length: 4 }).map((item, index, arr) => {
                        const isLast = index === arr.length - 1;

                        return (
                            <View key={index} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: Platform.isPad ? vs(14) : vs(12), marginBottom: isLast ? vs(50) : 0, borderRadius: vs(20), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                                
                                <View style={{ width: '70%', height: 'auto', rowGap: vs(16) }}>

                                    <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                        
                                        <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Учитель: </Text>
                                        
                                        <Text ellipsizeMode='tail'  style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Хегай Юлия Леонидовна</Text>
                                        
                                    </View>

                                    <View style={{ width: '100%', height: 'auto', justifyContent: 'center', flexDirection: 'column', gap: vs(6), alignSelf: 'flex-end'}}>
                                        
                                        <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '600', color: '#6A5AE0' }}>Объявление: </Text>
                                        
                                        <Text numberOfLines={5} style={{ fontSize: Platform.isPad ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>Тест</Text>
                                        
                                    </View>

                                </View>
                                
                                <View style={{height: vs(30), paddingHorizontal: Platform.isPad ? vs(10) : vs(8), backgroundColor: '#EFEEFC', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                                    <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#6A5AE0',  }}>24.03.2023</Text>
                                </View>
                            
                            </View>
                        )
                    })}

                </ScrollView>

            }

        </View>
    )
}

export default AnnouncementsScreen;