import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'

const Status = ({ type, questions }) => {

    const { s, vs } = useScale()

    return (
        <View style={{ width: '100%', height: 'auto', rowGap: vs(10), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: Platform.isPad ? vs(18) : vs(16), borderRadius: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                    
            <Text style={{ fontSize: Platform.isPad? vs(20) : vs(18), fontWeight: '500' }}>Задание {type === 'completed' ? 'выполнено' : 'не выполнено'}</Text>
            
            {(type === 'inProcess' || type === 'notCompleted') && <Text style={{ fontSize: Platform.isPad? vs(16) : vs(14), color: '#5AE0C0' }}>Количество вопросов: {questions}</Text>}
        
        </View>
    )
}

export default Status