import { View, Text, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Calendar from '../components/Calendar'
import Schedule from './Schedule/Schedule'
import { getSchedule } from './Schedule/hooks/getSchedule'
import Slider from '../navigation/Slider/Slider'
import SliderContent from '../navigation/Slider/SliderContent'
import useLock from '../hooks/useLock'
import { store } from '../store/store'

const ScheduleScreen = () => {

    const { s, vs, isTablet } = useScale()

    useLock()
    
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

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
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', padding: vs(20), rowGap: vs(25), flex: 1 }} style={{ backgroundColor: 'white' }}>
            
                <Text style={{ fontSize: isTablet ? vs(18) : vs(16), color: '#0C092A' }}>{store.text?.placeholders?.data_select}</Text>

                <Calendar show={show} setShow={setShow} date={date} onConfirm={(d) => setDate(d)}/>

                <View style={{ paddingHorizontal: vs(10), borderWidth: 1, borderRadius: vs(20), borderColor: '#EEF3FC' }}>
                    <Button 
                        color={'#5AB0E0'} 
                        title={formatDate(date)} 
                        onPress={() => setShow(true)} 
                    />
                </View>

                <Schedule schedule={schedule?.data} />

            </ScrollView>

            <Slider>
                <SliderContent />
            </Slider>
        </View>
    )
}

export default ScheduleScreen