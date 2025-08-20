import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const TaskScreen = ({ state }) => {

    const { s, vs } = useScale()

    const navigation = useNavigation()

    return (
        <ScrollView contentContainerStyle={{ padding: vs(20), backgroundColor: 'white', rowGap: vs(20) }} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 'auto', width: '30%', flexDirection: 'row', alignItems: 'center', columnGap: vs(3) }}>
                
                <Ionicons name='chevron-back' color={'#6A5AE0'} size={vs(20)} style={{ marginLeft: -vs(6) }} />
                
                <Text style={{ fontSize: Platform.isPad? vs(18) : vs(16), fontWeight: '500', color: '#6A5AE0'  }}>Назад</Text>

            </TouchableOpacity>
            
            <View style={{ backgroundColor: 'white', paddingBottom: vs(60), alignItems: 'center', flexDirection: 'column', padding: Platform.isPad ? vs(14) : vs(12), borderRadius: vs(10), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: vs(15), height: 'auto', alignItems: 'center', alignSelf: 'flex-start' }}>

                    <View style={{ width: 'auto', backgroundColor: '#FCEEF5', height: 'auto', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: 100, }}>
                        <Text style={{ fontSize: vs(50), color: '#36355A' }}>M</Text>
                    </View>
            
                    <View style={{ height: 'auto', width: '65%', justifyContent: 'space-between', rowGap: vs(10) }}>
            
                        <Text style={{ fontSize: Platform.isPad? vs(18) : vs(16), fontWeight: '500', color: '#36355A' }}>Мое задание</Text>
            
                        <Text style={{ fontSize: Platform.isPad? vs(14) : vs(12), fontWeight: '500', color: '#36355A' }}>Тестовый предмет Биология</Text>
            
                        <View style={{ flexDirection: 'row', gap: vs(5), alignItems: 'center' }}>

                            <Text style={{ fontSize: Platform.isPad? vs(14) : vs(12), fontWeight: '500', color: '#36355A' }}>Дата начала:</Text>

                            <View style={{ padding: vs(5), backgroundColor: '#FCEEF5', justifyContent: 'center', width: '60%', alignItems: 'center', borderRadius: 5 }}>
                                <Text style={{ fontSize: Platform.isPad ? vs(12) : vs(10), color: '#E05A9A', fontWeight: '500', lineHeight: 20, textAlign: 'center' }}>28.10.2024, 18:29:52</Text>
                            </View>

                        </View>
            
                    </View>
                    
                </View>  

                <View style={{ position: 'absolute', width: '80%', height: 'auto', bottom: 0, alignSelf: 'center', backgroundColor: '#FCEEF5', paddingVertical: vs(5), borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <Text numberOfLines={1} style={{ fontSize: Platform.isPad? vs(14) : vs(12), color: '#E05A9A', fontWeight: '500', textAlign: 'center' }}>Время на решение: не установлено</Text>
                </View>
                            
            </View>

            <View style={{ width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: Platform.isPad ? vs(18) : vs(16), borderRadius: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                <Text style={{ fontSize: Platform.isPad? vs(20) : vs(18) }}>Задание не выполнено</Text>
            </View>

        </ScrollView>
    )
}

export default TaskScreen;