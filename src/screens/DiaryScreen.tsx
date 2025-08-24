import { View, Text, Platform, Button, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Calendar from '../components/Calendar'
import Diary from './Diary/Diary'
import { getDiary } from './Diary/hooks/getDiary'

const DiaryScreen = () => {

    const { s, vs } = useScale()

    const formatDate = (date: Date | null) => {
        if (!date) return ''
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)
    const [showAndroid, setShowAndroid] = useState(false)

    const formattedDate = formatDate(date)

    const { diary, loading, error } = getDiary(formattedDate)

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', padding: vs(20), rowGap: vs(25)}} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16) }}>Выберите дату</Text>

            <Calendar show={show} setShow={setShow} date={date} onConfirm={(d) => setDate(d)}/>

            <View style={{ paddingHorizontal: vs(10), borderWidth: 1, borderRadius: vs(20), borderColor: '#EEF3FC' }}>
                <Button color={'#5AB0E0'} title={formatDate(date)} onPress={() => Platform.OS === 'ios' ? setShow(true) : setShowAndroid(true)} />
            </View>
            
            { loading ?

                <View style={{ height: vs(1000), width: '100%', paddingTop: vs(200) }}>
                    <ActivityIndicator size={'large'} color={'#6A5AE0'} />
                </View>
            :
                <Diary diary={diary?.data} />

            } 

        </ScrollView>
    )
}

export default DiaryScreen;