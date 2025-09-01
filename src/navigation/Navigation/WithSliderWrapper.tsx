import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Navigation from './Navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
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

                <Navigation />

            </NavigationContainer>

        </View>
    );
};

export default observer(WithSliderWrapper);