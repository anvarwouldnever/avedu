import { View, Text } from 'react-native'
import React from 'react'
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { useScale } from '../../hooks/useScale';
import { getRemarks } from './hooks/getRemarks';
import { formatDate } from './utils/formatDate';

const Remarks = ({ section }) => {

    const { s, vs, isTablet } = useScale()

    const { remarks, loading, error } = getRemarks()

    return (
        <Animated.ScrollView key={section} entering={FadeInLeft} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                            
            {remarks?.data.map((item, index, arr) => {
                const isLast = index === arr.length - 1;

                const remark = item?.description;
                const child = item?.client?.full_name; 
                const teacher = item?.customer?.full_name;
                const subject = item?.discipline?.title;         
                const date = formatDate(item?.updated_at);

                return (
                    <View key={index} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: isTablet ? vs(14) : vs(12), marginBottom: isLast ? vs(50) : 0, borderRadius: vs(20), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                        
                        <View style={{ width: '70%', height: 'auto', rowGap: isTablet ? vs(14) : vs(12) }}>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Учитель: </Text>
                                
                                <Text ellipsizeMode='tail'  style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>{teacher}</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Предмет: </Text>
                                
                                <Text ellipsizeMode='tail' style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>{subject}</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', alignItems: 'center', flexDirection: 'row' }}>
                                
                                <Text style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '600', color: '#333333' }}>Ребёнок: </Text>
                                
                                <Text ellipsizeMode='tail' style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '400', color: '#333333' }}>{child}</Text>
                                
                            </View>

                            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', flexDirection: 'column', gap: vs(6), alignSelf: 'flex-end'}}>
                                
                                <Text style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '600', color: 'red' }}>Примечание: </Text>
                                
                                <Text numberOfLines={5} style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '400', color: '#333333', lineHeight: isTablet ? vs(20) : vs(18) }}>{remark}</Text>
                                
                            </View>

                        </View>
                        
                        <View style={{height: vs(30), paddingHorizontal: isTablet ? vs(10) : vs(8), backgroundColor: '#EFEEFC', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
                            <Text style={{ fontSize: isTablet ? vs(14) : vs(12), color: '#6A5AE0'}}>{date}</Text>
                        </View>
                    
                    </View>
                )
            })}

        </Animated.ScrollView>
    )
}

export default Remarks