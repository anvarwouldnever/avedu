import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { SvgUri } from 'react-native-svg'

const Diary = ({ diary }) => {

    const { s, vs, isTablet } = useScale()

    const formatDateWithDay = (dateString: string) => {
        if (!dateString) return '';
    
        const date = new Date(dateString); // "2025-03-12"
    
        const days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ];
    
        const dayOfWeek = days[date.getDay()];
    
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
    
        return `${dayOfWeek}, ${day}.${month}.${year}`;
    };
    
    if (!diary || diary.length === 0) {
        return (
            <View style={{ width: '100%', height: vs(400), alignItems: 'center', paddingTop: vs(70) }}>
                
                <SvgUri 
                    uri='https://mykids.avedu.uz/img/emptycontent.svg'
                    width={vs(300)}
                />

                <View style={{ rowGap: vs(10) }}>
                    <Text style={{ fontSize: isTablet ? vs(16) : vs(14), color: 'black', textAlign: 'center', fontWeight: '600' }}>
                        Нет контента
                    </Text>
                    
                    <Text style={{ fontSize: isTablet ? vs(14) : vs(12), color: '#8D8D8D', textAlign: 'center', fontWeight: '400' }}>
                        Выбранная неделя не содержит уроков
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ width: '100%', height: 'auto', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: vs(25), marginBottom: vs(50) }}>
                    
            {diary?.map((day, index) => {

                const date = formatDateWithDay(day?.date)
            
                return (
                    <View key={index} style={{height: 'auto', width: isTablet ? '48%' : '100%', borderRadius: vs(15), alignItems: 'center', backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
                        
                        <View style={{ borderRadius: vs(15), alignSelf: 'center', width: '100%', backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', padding: vs(15), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                        
                            <Text style={{ color: 'white', fontSize: isTablet? vs(14) : vs(14), textAlign: 'center', fontWeight: '600' }}>{date}</Text>

                        </View>

                        <View style={{ height: 'auto', width: '100%' }}>
                            
                            {day?.list.map((subject, index, arr) => {
                                const isLast = index === arr.length - 1;

                                const name = subject?.discipline?.title
                                const homework = subject?.lessonplan?.homework

                                return (
                                    <View key={index} style={{ width: '100%', borderBottomWidth: isLast ? 0 : 1, borderBottomColor: 'grey', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', padding: vs(15), alignItems: 'center' }}>
                                        
                                        <View style={{ width: '100%', height: 'auto', justifyContent: 'space-between', rowGap: vs(10) }}>

                                            <Text style={{ fontSize: isTablet ? vs(12) : vs(14), color: '#0C092A' }}>{name}</Text>

                                            <Text numberOfLines={2} style={{ fontSize: isTablet ? vs(12) : vs(14), color: '#8D8D8D', lineHeight: vs(16) }}>{homework ?? 'Домашнее задание не назначено учителем'}</Text>

                                        </View>

                                    </View>
                                )
                            })}

                        </View>

                    </View>
                )
            })}

        </View>
    )
}

export default Diary