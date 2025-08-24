import { ScrollView } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale'
import Back from './Task/Back'
import Task from './Task/Task'
import Status from './Task/Status'

const TaskScreen = ({ route }) => {

    const { s, vs } = useScale()

    const startDate = route?.params?.startDate;
    const title = route?.params?.title;
    const taskTitle = route?.params?.taskTitle;
    const subject = route?.params?.subject;
    const questions = route?.params?.questions;
    const isTimeLimit = route?.params?.isTimeLimit;
    const givenTime = route?.params?.givenTime;
    const type = route?.params?.type;
    const baseColor = route?.params?.baseColor;
    const color = route?.params?.color;
    const image = route?.params?.image;

    return (
        <ScrollView contentContainerStyle={{ padding: vs(20), backgroundColor: 'white', rowGap: vs(20) }} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <Back />
            
            <Task startDate={startDate} title={title} image={image} taskTitle={taskTitle} subject={subject} isTimeLimit={isTimeLimit} givenTime={givenTime} baseColor={baseColor} color={color} />

            <Status type={type} questions={questions} />

        </ScrollView>
    )
}

export default TaskScreen;