import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { store } from '../../store/store'

const Sections = ({ section, setSection }) => {

    const { s, vs, isTablet } = useScale()

    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: vs(56), flexDirection: 'row' }}>
            
            <TouchableOpacity onPress={() => setSection('Невыполненные')} style={{width: '35%', height: '100%', borderBottomWidth: 1, borderColor: section === 'Невыполненные' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: isTablet ? vs(12) : vs(12), color: section === 'Невыполненные' ? '#6A5AE0' : '#333333' }}>{store.text?.undones}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSection('Начатые')} style={{width: '30%', height: '100%', borderBottomWidth: 1, borderColor: section === 'Начатые' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: isTablet ? vs(12) : vs(12), color: section === 'Начатые' ? '#6A5AE0' : '#333333' }}>{store.text?.labes?.work_progress}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSection('Выполненные')} style={{width: '35%', height: '100%', borderBottomWidth: 1, borderColor: section === 'Выполненные' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: isTablet ? vs(12) : vs(12), color: section === 'Выполненные' ? '#6A5AE0' : '#333333' }}>{store.text?.labes?.work_done}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Sections