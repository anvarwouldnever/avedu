import { ScrollView } from 'react-native'
import React from 'react'
import { useScale } from '../hooks/useScale'
import InfoContainer from './Home/InfoContainer'
import ChildStats from './Home/ChildStats'
import Options from './Home/Options'
import { observer } from 'mobx-react-lite'
import Slider from '../navigation/Slider/Slider'
import SliderContent from '../navigation/Slider/SliderContent'

const HomeScreen = () => {

    const { s, vs } = useScale()

    return (
        <ScrollView contentContainerStyle={{ padding: vs(20) }} showsVerticalScrollIndicator={false} bounces={true} style={{ flex: 1, backgroundColor: 'white' }}>
            
            <InfoContainer />

            <ChildStats />
            
            <Options />

            <Slider>
                <SliderContent />
            </Slider>
            
        </ScrollView>
    )
}

export default observer(HomeScreen);