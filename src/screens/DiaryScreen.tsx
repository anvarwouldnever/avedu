import { View, Text, Platform, Button } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import Calendar from '../components/Calendar'

const DiaryScreen = () => {

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

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: vs(20), backgroundColor: 'white', rowGap: vs(25) }}>
            
            <Text style={{ fontSize: Platform.isPad ? vs(18) : vs(16) }}>Выберите дату</Text>

            <Calendar show={show} cancel={cancel} done={done} onChange={onChange} birthday={birthday} />

            <Button color={'#6A5AE0'} title={formatDate(birthday)} onPress={() => Platform.OS === 'ios' ? setShow(true) : setShowAndroid(true)} />

        </View>
    )
}

export default DiaryScreen;