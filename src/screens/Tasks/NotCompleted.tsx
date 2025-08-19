import { View, Text, Platform } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';

const NotCompleted = ({ section, getEnteringAnimation }) => {

    const { s, vs } = useScale()

    return (
        <Animated.ScrollView key={section} entering={getEnteringAnimation()} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                    
            {Array.from({ length: 4 }).map((item, index, arr) => {
                const isLast = index === arr?.length - 1;

                return (
                    <View key={index} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', gap: vs(15), padding: Platform.isPad ? vs(14) : vs(12), marginBottom: isLast ? vs(50) : 0, borderRadius: vs(20), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                        
                        <View style={{ width: 'auto', backgroundColor: '#FCEEF5', height: '100%', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: vs(15), }}>
                            <Text style={{ fontSize: vs(50), color: '#36355A' }}>M</Text>
                        </View>

                        <View style={{ height: 'auto', width: '60%', justifyContent: 'space-between' }}>

                                <Text style={{ fontSize: vs(16), fontWeight: '500', color: '#36355A' }}>Мое задание</Text>

                                <Text style={{ fontSize: vs(12), fontWeight: '500', color: '#36355A' }}>Тестовый предмет Биология</Text>

                                <View style={{ padding: vs(5), backgroundColor: '#FCEEF5', borderRadius: 50, justifyContent: 'center', width: '60%', alignItems: 'center'}}>
                                    <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#E05A9A', fontWeight: '500' }}>не выполнено</Text>
                                </View>

                        </View>
                    
                    </View>
                )
            })}

        </Animated.ScrollView>
    )
}

export default NotCompleted