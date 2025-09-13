import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'

const Sections = ({ section, setSection }) => {

    const { s, vs, isTablet } = useScale()

    return (
        <View style={{ width: '100%', backgroundColor: 'white', height: vs(56), flexDirection: 'row' }}>
        
            <TouchableOpacity onPress={() => setSection('примечания')} style={{width: '50%', height: '100%', borderBottomWidth: 1, borderColor: section === 'примечания' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ padding: vs(10), fontSize: isTablet ? vs(18) : vs(16), color: section === 'примечания' ? '#6A5AE0' : '#333333' }}>Примечания</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSection('объявления')} style={{width: '50%', height: '100%', borderBottomWidth: 1, borderColor: section === 'объявления' ? '#6A5AE0' : 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ padding: vs(10), fontSize: isTablet ? vs(18) : vs(16), color: section === 'объявления' ? '#6A5AE0' : '#333333' }}>Объявления</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Sections;