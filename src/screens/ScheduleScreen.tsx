import { View, Text, Button, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Calendar from '../components/Calendar'

const ScheduleScreen = () => {

    const { s, vs } = useScale()
    
    const [birthday, setBirthday] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [showAndroid, setShowAndroid] = useState(false)

    const formatDate = (date: Date) => {
        if (!date) return ''
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${day}.${month}.${year}`
    }

    const onChange = (event, selectedDate) => {
        setBirthday(selectedDate);
    };

    const done = () => {
        setShow(false)
    }

    const cancel = () => {
        setShow(false)
    }

    const schedule = [
        {
            date: 'Понедельник, 03.02.2025',
            subjects: [
                { name: 'Русский язык', teacher: 'Хегай Юлия Леонидовна', fromto: '08:45 - 09:25' },
                { name: 'Букварь', teacher: 'Хегай Юлия Леонидовна', fromto: '09:40 - 10:20' },
                { name: 'Воспитание', teacher: 'Хегай Юлия Леонидовна', fromto: '10:25 - 11:05' },
                { name: 'Математика', teacher: 'Хегай Юлия Леонидовна', fromto: '11:10 - 11:50' },
            ]
        },
        {
            date: 'Вторник, 04.02.2025',
            subjects: [
                { name: 'Чтение', teacher: 'Хегай Юлия Леонидовна', fromto: '09:40 - 10:20' },
                { name: 'Технология', teacher: 'Хегай Юлия Леонидовна', fromto: '10:25 - 11:05' },
                { name: 'Музыка', teacher: 'Хегай Юлия Леонидовна', fromto: '11:10 - 11:50' },
                
            ]
        },
        {
            date: 'Среда, 05.02.2025',
            subjects: [
                { name: 'КФА', teacher: 'Хегай Юлия Леонидовна', fromto: '08:45 - 09:25' },
                { name: 'Читательская грамотность', teacher: 'Хегай Юлия Леонидовна', fromto: '09:40 - 10:20' },
            ]
        },
        {
            date: 'Четверг, 06.02.2025',
            subjects: [
                { name: 'Воспитание', teacher: 'Хегай Юлия Леонидовна', fromto: '08:45 - 09:25' },
            ]
        },
        {
            date: 'Пятница, 07.02.2025',
            subjects: [
                { name: 'Русский язык', teacher: 'Хегай Юлия Леонидовна', fromto: '10:25 - 11:05' },
            ]
        },
        {
            date: 'Суббота, 08.02.2025',
            subjects: [
                { name: 'Воспитание', teacher: 'Хегай Юлия Леонидовна', fromto: '08:45 - 09:25' },
                { name: 'Английский язык', teacher: 'Хегай Юлия Леонидовна', fromto: '09:40 - 10:20' },
            ]
        },
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', padding: vs(20), rowGap: vs(25)}} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), color: '#0C092A' }}>Выберите дату</Text>

            <Calendar show={show} cancel={cancel} done={done} onChange={onChange} birthday={birthday} />

            <View style={{ paddingHorizontal: vs(10), borderWidth: 1, borderRadius: vs(20), borderColor: '#EEF3FC' }}>
                <Button color={'#5AB0E0'} title={formatDate(birthday)} onPress={() => Platform.OS === 'ios' ? setShow(true) : setShowAndroid(true)} />
            </View>

            <View style={{ width: '100%', height: 'auto', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: vs(25), marginBottom: vs(50) }}>
                {schedule.map((day, index) => {

                    return (
                        <View key={index} style={{height: 'auto', width: Platform.isPad ? '48%' : '100%', borderRadius: vs(15), alignItems: 'center', backgroundColor: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
                            
                            <View style={{ borderRadius: vs(15), alignSelf: 'center', width: '100%', backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', padding: vs(15), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                               
                                <Text style={{ color: 'white', fontSize: Platform.isPad? vs(14) : vs(14), textAlign: 'center', fontWeight: '600' }}>{day?.date}</Text>

                            </View>

                            <View style={{ height: 'auto', width: '100%' }}>
                                {day?.subjects.map((subject, index, arr) => {

                                    const isLast = index === arr.length - 1;

                                    return (
                                        <View key={index} style={{ width: '100%', borderBottomWidth: isLast ? 0 : 1, borderBottomColor: 'grey', height: 'auto', flexDirection: 'row', justifyContent: 'space-between', padding: vs(15), alignItems: 'center' }}>
                                            
                                            <View style={{ width: '55%', height: 'auto', justifyContent: 'space-between', rowGap: vs(10) }}>

                                                <Text style={{ fontSize: Platform.isPad ? vs(12) : vs(14), color: '#0C092A' }}>{subject.name}</Text>

                                                <Text numberOfLines={1} style={{ fontSize: Platform.isPad ? vs(10) : vs(12), color: '#8D8D8D' }}>{subject.teacher}</Text>

                                            </View>

                                            <Text style={{ fontSize: Platform.isPad ? vs(12) : vs(14), color: '#5AB0E0', fontWeight: '600' }}>{subject.fromto}</Text>

                                        </View>
                                    )
                                })}
                            </View>

                        </View>
                    )
                })}
            </View>

        </ScrollView>
    )
}

export default ScheduleScreen