import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { useScale } from '../hooks/useScale'
import InfoContainer from './Home/InfoContainer'
import ChildStats from './Home/ChildStats'
import Options from './Home/Options'
import { observer } from 'mobx-react-lite'
import Slider from '../navigation/Slider/Slider'
import SliderContent from '../navigation/Slider/SliderContent'
import useLock from '../hooks/useLock'
import { getText } from './Login/hooks/getText'
import * as SplashScreen from 'expo-splash-screen';

const HomeScreen = () => {

    const { s, vs } = useScale()

    const { loading, error } = getText()

    useLock()

    useEffect(() => {
        if (!loading) {
            SplashScreen.hideAsync();
        }
    }, [loading])

    return (
        <View style={{ flex: 1 }}>
            
            <ScrollView contentContainerStyle={{ padding: vs(20) }} showsVerticalScrollIndicator={false} bounces={true} style={{ flex: 1, backgroundColor: 'white' }}>
                
                <InfoContainer />

                <ChildStats />
                
                <Options />
                
            </ScrollView>

            <Slider>
                <SliderContent />
            </Slider>
            
        </View>
    )
}

export default observer(HomeScreen);