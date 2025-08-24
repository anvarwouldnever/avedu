import { View, Text, Button, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Calendar from '../components/Calendar'
import Schedule from './Schedule/Schedule'
import { getSchedule } from './Schedule/hooks/getSchedule'

const ScheduleScreen = () => {

    const { s, vs } = useScale()
    
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [showAndroid, setShowAndroid] = useState(false)

    const formatDate = (date: Date | null) => {
        if (!date) return ''
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const formattedDate = formatDate(date)

    const { schedule, loading, error } = getSchedule(formattedDate)

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', padding: vs(20), rowGap: vs(25)}} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16), color: '#0C092A' }}>Выберите дату</Text>

            <Calendar show={show} setShow={setShow} date={date} onConfirm={(d) => setDate(d)}/>

            <View style={{ paddingHorizontal: vs(10), borderWidth: 1, borderRadius: vs(20), borderColor: '#EEF3FC' }}>
                <Button color={'#5AB0E0'} title={formatDate(date)} onPress={() => Platform.OS === 'ios' ? setShow(true) : setShowAndroid(true)} />
            </View>

            <Schedule schedule={schedule?.data} />

        </ScrollView>
    )
}

export default ScheduleScreen