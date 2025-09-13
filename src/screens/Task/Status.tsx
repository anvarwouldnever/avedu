import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { store } from '../../store/store'

const Status = ({ type, questions }) => {
    const { s, vs, isTablet } = useScale()

    return (
        <View style={{ width: '100%', height: 'auto', rowGap: vs(10), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', padding: isTablet ? vs(18) : vs(16), borderRadius: vs(10), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7,}}>
            <Text style={{ fontSize: isTablet ? vs(20) : vs(18), fontWeight: '500' }}>
                {type === 'completed'
                    ? store.text?.labes?.task_done
                    : store.text?.labes?.task_not_done}
            </Text>

            {(type === 'inProcess' || type === 'notCompleted') && (
                <Text style={{ fontSize: isTablet ? vs(16) : vs(14), color: '#5AE0C0' }}>
                    {store.text?.labes?.count_q} {questions}
                </Text>
            )}
        </View>
    )
}

export default Status
