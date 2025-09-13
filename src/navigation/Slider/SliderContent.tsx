import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import { navigationStore } from '../NavigationStore';
import { useScale } from '../../hooks/useScale';
import { store } from '../../store/store';
import { navigationReset } from '../../utils/navigationReset';

const SliderContent = () => {
    const { s, vs, isTablet } = useScale();

    const handleNavigate = (screen: string) => {
        if (navigationStore.currentRoute !== screen) {
            navigationReset(screen)
        };
        navigationStore.setOpenSlider(false)
    };

    const menuItems = [
        { screen: 'Home', icon: 'home-outline', label: store.text?.menu1 },
        { screen: 'Announcements', icon: 'notifications-outline', label: store.text?.feebacks },
        { screen: 'Tasks', icon: 'create-outline', label: store.text?.task },
        { screen: 'Diary', icon: 'reader-outline', label: store.text?.menu6 }, 
        { screen: 'Schedule', icon: 'calendar-outline', label: store.text?.menu5 },
        { screen: 'Profile', icon: 'person-outline', label: store.text?.prime_info }
    ];    
  
    return (
        <View style={{ padding: vs(14), backgroundColor: '#FFFFFF', width: '100%', borderRadius: 30}}>
            {menuItems.map((item) => {
            const isActive = navigationStore.currentRoute === item.screen;
            return (
                <Pressable key={item.screen} onPress={() => handleNavigate(item.screen)}
                    style={[
                        styles.item,
                        isActive && styles.itemActive,
                        {marginBottom: isTablet? vs(20) : s(20), padding: isTablet? vs(14) : s(14),}
                    ]}
                >
                    <Ionicons
                        name={item.icon as any}
                        size={vs(20)}
                        color={isActive ? '#FFFFFF' : '#B390EF'}
                    />

                    <Text style={[styles.text, { color: isActive ? '#FFFFFF' : '#B390EF', fontSize: isTablet? vs(16) : s(16), marginLeft: isTablet? vs(15) : s(15)}]}>
                        {item?.label}
                    </Text>

                </Pressable>
            );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
    },
    itemActive: {
        backgroundColor: '#B390EF',
    },
    text: {
        flexShrink: 1,
        fontWeight: '600',
    },
});

export default observer(SliderContent);