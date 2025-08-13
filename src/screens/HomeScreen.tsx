import { ScrollView, Platform } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale'
import InfoContainer from './Home/InfoContainer'
import ChildStats from './Home/ChildStats'
import Options from './Home/Options'

const HomeScreen = () => {

    const { s, vs } = useScale()

    return (
        <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={{ flex: 1, padding: Platform.isPad? vs(20) : s(20), backgroundColor: 'white' }}>
            
            <InfoContainer />

            <ChildStats />
            
            <Options />
            
        </ScrollView>
    )
}

export default HomeScreen;