import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Slider from '../Slider/Slider';
import Navigation from './Naivgation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import SliderContent from '../Slider/SliderContent';
import { navigationStore } from '../NavigationStore';
import { observer } from 'mobx-react-lite';

const WithSliderWrapper = () => {
    const [sliderOpen, setSliderOpen] = useState(false);

    const navigationRef = useNavigationContainerRef();

    useEffect(() => {
        const unsubscribe = navigationRef.addListener('state', () => {
            const route = navigationRef.getCurrentRoute();
            if (route) {
                navigationStore.setRoute(route.name);
            }
        });

        return unsubscribe;
    }, [navigationRef]);

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer ref={navigationRef}>
                    <>
                        <Navigation openSlider={() => setSliderOpen(true)} />
                        <Slider isOpen={sliderOpen} onClose={() => setSliderOpen(false)}>
                            <SliderContent onClose={() => setSliderOpen(false)} />
                        </Slider>
                        
                    </>
            </NavigationContainer>
        </View>
    );
};

export default observer(WithSliderWrapper);