import { View, Text, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useScale } from '../hooks/useScale'
import { getChildren } from './Children/hooks/getChildren'
import Children from './Children/Children'
import Button from './Children/Button'

const ChildrenScreen = () => {

    const { s, vs } = useScale()

    const { children, loading, error } = getChildren()

    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: vs(20), paddingTop: vs(150), rowGap: vs(25), alignItems: 'center', justifyContent: 'center', flex: 1 }} style={{ backgroundColor: '#EFEEFC' }}>
            
            <View style={{ height: 'auto', borderRadius: vs(10), width: '100%', padding: vs(20), backgroundColor: 'white', rowGap: vs(30), alignSelf: 'center', position: 'absolute' }}>
                
                <Text style={{ fontSize: Platform.isPad ? vs(16) : vs(14), fontWeight: '600' }}>Выберите ребенка:</Text>

                {children && <Children children={children} selectedId={selectedId} setSelectedId={setSelectedId} />}

                <Button selectedId={selectedId} children={children} />
            
            </View>

        </ScrollView>
    )
}

export default ChildrenScreen