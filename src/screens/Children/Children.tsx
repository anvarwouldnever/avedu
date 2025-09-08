import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import * as Haptics from 'expo-haptics';

const Children = ({ children, selectedId, setSelectedId }) => {

    const { s, vs, isTablet } = useScale()
    
    const handleSelect = (id: number) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
        setSelectedId(id);
    };

    return (
        <View style={{ width: '100%', height: 'auto', rowGap: vs(15) }}>
    
            {children?.clients.map((child, index) => {

                const name = child?.full_name;
                const id = child?.id;

                return (
                    <TouchableOpacity activeOpacity={1} onPress={() => handleSelect(id)} key={index} style={[{ flexDirection: 'row', transform: [{scale: selectedId === id ? 1.06 : 1}], alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#9087E5', padding: vs(10), borderRadius: vs(15), shadowColor: "#6A5AE0", shadowOffset: { width: 0, height: 1 }, shadowOpacity: selectedId === id ? 0.7 : 0.3, shadowRadius: selectedId === id ? 3 : 2, elevation: 7 }]}>

                        <Text style={{ fontSize: isTablet ? vs(14) : vs(12), fontWeight: '500', color: 'white'}}>{name}</Text>

                        <View style={{padding: vs(6), backgroundColor: '#6A5AE0', justifyContent: 'center', alignItems: 'center', borderRadius: vs(10), width: 'auto', height: 'auto' }}>
                            <Text style={{fontSize: isTablet ? vs(12) : vs(12), color: 'white', fontWeight: '600'}}>ID {id}</Text>
                        </View>

                    </TouchableOpacity>
                )
            })}

        </View>
    )
}

export default Children