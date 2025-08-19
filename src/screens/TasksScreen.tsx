import { View } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import { FadeInLeft, FadeInRight } from 'react-native-reanimated'
import Completed from './Tasks/Completed'
import InProcess from './Tasks/InProcess'
import NotCompleted from './Tasks/NotCompleted'
import Sections from './Tasks/Sections'

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

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: vs(20), backgroundColor: 'white', rowGap: vs(25) }}>
            
            <Sections section={section} setSection={handleSetSection} />

            { section === 'Невыполненные' ?  

                <NotCompleted section={section} getEnteringAnimation={getEnteringAnimation} />

            : section === 'Начатые' ?

                <InProcess section={section} getEnteringAnimation={getEnteringAnimation} />

            : section === 'Выполненные' ?

                <Completed section={section} getEnteringAnimation={getEnteringAnimation} /> : null

            }

        </View>
    )
}

export default TasksScreen;