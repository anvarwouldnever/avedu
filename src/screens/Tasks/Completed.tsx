import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { useScale } from '../../hooks/useScale'
import { useNavigation } from '@react-navigation/native'
import { store } from '../../store/store'

const Completed = ({ section, getEnteringAnimation, completed }) => {

    const { s, vs, isTablet } = useScale()

    const navigation = useNavigation()

    return (
        <Animated.ScrollView key={section} entering={getEnteringAnimation()} showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: vs(25), padding: vs(2) }} style={{ width: '100%', height: 'auto' }}>
                                
            {completed?.map((item, index, arr) => {
                const isLast = index === arr.length - 1;

                const title = item?.title
                const subject = item?.lessonplan?.discipline?.title

                const startDate = item?.start_at
                const taskTitle = item?.lessonplan?.title
                const questions = item?.questions_count
                const isTimeLimit = item?.is_time_limit
                const givenTime = item?.given_seconds
                const image = item?.lessonplan?.discipline?.icon

                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Task', {startDate: startDate, image: image, title: title, subject: subject, taskTitle: taskTitle, questions: questions, isTimeLimit: isTimeLimit, givenTime: givenTime, type: 'completed', baseColor: '#F0FCEE', color: '#59E956' })} key={index} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', gap: vs(15), padding: isTablet ? vs(14) : vs(12), marginBottom: isLast ? vs(50) : 0, borderRadius: vs(20), width: '100%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }} >
                        
                        <View style={{ width: vs(85), backgroundColor: '#F0FCEE', height: '100%', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: vs(15), alignItems: 'center' }}>
                            <Text style={{ fontSize: vs(50), color: '#36355A' }}>{title?.[0]?.toUpperCase() || ''}</Text>
                        </View>

                        <View style={{ height: 'auto', width: '60%', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: vs(16), fontWeight: '500', color: '#36355A' }}>{title}</Text>

                            <Text style={{ fontSize: vs(12), fontWeight: '500', color: '#36355A' }}>{subject}</Text>

                            <View style={{ padding: vs(5), backgroundColor: '#F0FCEE', borderRadius: 50, justifyContent: 'center', width: '50%', alignItems: 'center'}}>
                                <Text style={{ fontSize: isTablet ? vs(14) : vs(12), color: '#59E956', fontWeight: '500' }}>{store.text?.labes?.work_done}</Text>
                            </View>

                        </View>
                    
                    </TouchableOpacity>
                )
            })}

        </Animated.ScrollView>
    )
}

export default Completed