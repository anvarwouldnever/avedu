import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { SvgUri } from 'react-native-svg'

const Schedule = ({ schedule }) => {

    const { s, vs } = useScale()

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

    const formatTime = (time: string) => time?.slice(0, 5) || '';

    if (!schedule || schedule.length === 0) {
        return (
            <View style={{ width: '100%', height: vs(400), alignItems: 'center', paddingTop: vs(40) }}>
                
                <SvgUri 
                    uri='https://mykids.avedu.uz/img/emptynote.svg'
                    width={vs(300)}
                />

                <View style={{ rowGap: vs(10) }}>
                    <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), color: 'black', textAlign: 'center', fontWeight: '600' }}>
                        Нет объявлений
                    </Text>
                    
                    <Text style={{ fontSize: Platform.isPad ? vs(14) : vs(12), color: '#8D8D8D', textAlign: 'center', fontWeight: '400' }}>
                        Учителя еще не делали объявлений
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ width: '100%', height: 'auto', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: vs(25), marginBottom: vs(50) }}>
            
            {schedule.map((day, index) => {

                const date = formatDateWithDay(day?.date)

                return (
                    <View key={index} style={{height: 'auto', width: Platform.isPad ? '48%' : '100%', borderRadius: vs(15), alignItems: 'center', backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
                        
                        <View style={{ borderRadius: vs(15), alignSelf: 'center', width: '100%', backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', padding: vs(15), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                        
                            <Text style={{ color: 'white', fontSize: Platform.isPad? vs(14) : vs(14), textAlign: 'center', fontWeight: '600' }}>{date}</Text>

                        </View>

                        <View style={{ height: 'auto', width: '100%' }}>

                            {day?.list.map((subject, index, arr) => {
                                const isLast = index === arr.length - 1;

                                const name = subject?.discipline?.title;
                                const teacher = subject?.customer?.full_name;
                                const from = formatTime(subject?.schedule?.from_at);
                                const to = formatTime(subject?.schedule?.till_at);

                                return (
                                    <View key={index} style={{ width: '100%', borderBottomWidth: isLast ? 0 : 1, borderBottomColor: 'grey', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', padding: vs(15), alignItems: 'center' }}>
                                        
                                        <View style={{ width: '55%', height: 'auto', justifyContent: 'space-between', rowGap: Platform.isPad ? vs(8) : vs(10) }}>

                                            <Text style={{ fontSize: Platform.isPad ? vs(12) : vs(14), color: '#0C092A' }}>{name}</Text>

                                            <Text numberOfLines={1} style={{ fontSize: Platform.isPad ? vs(10) : vs(12), color: '#8D8D8D' }}>{teacher}</Text>

                                        </View>

                                        <Text style={{ fontSize: Platform.isPad ? vs(12) : vs(14), color: '#5AB0E0', fontWeight: '600' }}>{from} - {to}</Text>

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

export default Schedule;