import { View, Button, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useScale } from '../hooks/useScale'

const Calendar = ({ date, show, setShow, onConfirm }) => {
    const { vs } = useScale()
    const [tempDate, setTempDate] = useState<any>(date)

    const onChange = (event, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            setShow(false)
            if (selectedDate) {
                onConfirm(selectedDate)
            }
        } else {
            if (selectedDate) {
                setTempDate(selectedDate)
            }
        }
    }

    const done = () => {
        onConfirm(tempDate)
        setShow(false)
    }

    const cancel = () => {
        setTempDate(date)
        setShow(false)
    }

    if (Platform.OS === 'android') {
        return (
            show && (
                <RNDateTimePicker
                    value={date}
                    onChange={onChange}
                    themeVariant="light"
                    accentColor="#6A5AE0"
                    display="default"
                    mode="date"
                />
            )
        )
    }

    return (
        <Modal visible={show} animationType="fade" transparent={true}>
            <View
                style={{
                    width: 'auto',
                    maxWidth: 445,
                    rowGap: vs(20),
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: 'white',
                    paddingHorizontal: vs(10),
                    position: 'absolute',
                    top: vs(250),
                    alignSelf: 'center',
                    shadowColor: 'black',
                    shadowRadius: 400,
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 1,
                }}
            >
                <RNDateTimePicker
                    value={tempDate}
                    onChange={onChange}
                    themeVariant="light"
                    style={{
                        marginTop: 1,
                        width: '100%',
                        maxWidth: 420,
                        backgroundColor: 'white',
                    }}
                    accentColor="#6A5AE0"
                    display="inline"
                    mode="date"
                />

                <View
                    style={{
                        width: '100%',
                        maxWidth: 460,
                        alignItems: 'center',
                        marginBottom: vs(7),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button color={'#6A5AE0'} onPress={cancel} title="Отменить" />
                    <Button color={'#6A5AE0'} onPress={done} title="Готово" />
                </View>
            </View>
        </Modal>
    )
}

export default Calendar
