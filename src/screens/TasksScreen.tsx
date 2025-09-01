import { View } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Completed from './Tasks/Completed'
import InProcess from './Tasks/InProcess'
import NotCompleted from './Tasks/NotCompleted'
import Sections from './Tasks/Sections'
import { getTasks } from './Tasks/hooks/getTasks'
import Slider from '../navigation/Slider/Slider'
import SliderContent from '../navigation/Slider/SliderContent'

const sections = ['Невыполненные', 'Начатые', 'Выполненные']

const TasksScreen = () => {

    const { vs } = useScale()

    const [section, setSection] = useState<string>('Невыполненные')
    const [prevSection, setPrevSection] = useState<string>('Невыполненные')

    const getEnteringAnimation = () => {

        const prevIndex = sections.indexOf(prevSection)

        const currIndex = sections.indexOf(section)
        
        return currIndex > prevIndex
          ? FadeInRight
          : FadeInLeft
    }
    
    const handleSetSection = (newSection: string) => {
        setPrevSection(section)
        setSection(newSection)
    }

    const states =  ['', 'started', 'done']

    const { tasks, loading, error } = getTasks("1477")

    const notCompleted = tasks?.data.filter(
        (task: any) => !task?.start_at && !task?.done_at
    ) ?? [];
      
    const inProcess = tasks?.data?.filter(
        (task: any) => task?.start_at && !task?.done_at
    ) ?? [];
      
    const completed = tasks?.data?.filter(
        (task: any) => task?.done_at
    ) ?? [];

    // console.log(notStarted.length, started.length, done.length)

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: vs(20), backgroundColor: 'white', rowGap: vs(25) }}>
            
            <Sections section={section} setSection={handleSetSection} />

            { section === 'Невыполненные' ?  

                <NotCompleted notCompleted={notCompleted} section={section} getEnteringAnimation={getEnteringAnimation} />

            : section === 'Начатые' ?

                <InProcess inProcess={inProcess} section={section} getEnteringAnimation={getEnteringAnimation} />

            : section === 'Выполненные' ?

                <Completed completed={completed} section={section} getEnteringAnimation={getEnteringAnimation} /> : null

            }

            <Slider>
                <SliderContent />
            </Slider>

        </View>
    )
}

export default TasksScreen;