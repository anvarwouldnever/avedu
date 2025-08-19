import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import { navigationStore } from '../NavigationStore';
import { useScale } from '../../hooks/useScale';
import translations from '../../../translations';
import { store } from '../../store/store';

const menuItems = [
    { screen: 'Home', icon: 'home-outline', label: translations[store.language].главная },
    { screen: 'Announcements', icon: 'notifications-outline', label: translations[store.language].обьявленияипримечания },
    { screen: 'Tasks', icon: 'create-outline', label: translations[store.language].заданияребенка },
    { screen: 'Diary', icon: 'reader-outline', label: translations[store.language].дневникребенка },
    { screen: 'Schedule', icon: 'calendar-outline', label: translations[store.language].расписаниеуроков },
    { screen: 'Profile', icon: 'person-outline', label: translations[store.language].мойпрофиль },
];

const SliderContent = observer(({ onClose } : { onClose: () => void }) => {
    const navigation = useNavigation();
    const { s, vs } = useScale()

    const handleNavigate = (screen: string) => {
        if (navigationStore.currentRoute !== screen) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: screen }],
                })
            );
        };

        onClose();
    };
  
    return (
        <View style={{ padding: Platform.isPad? vs(14) : s(14), backgroundColor: '#FFFFFF'}}>
            {menuItems.map((item) => {
                const isActive = navigationStore?.currentRoute === item?.screen;

                return (
                    <Pressable key={item?.screen} onPress={() => handleNavigate(item?.screen)} style={[ styles.item, isActive && styles.itemActive, {marginBottom: Platform.isPad? vs(20) : s(20), padding: Platform.isPad? vs(14) : s(14)}]}>

                        <Ionicons name={item.icon as any} size={vs(20)} color={isActive ? '#FFFFFF' : '#9087E5'} />
                        
                        <Text style={[styles.text, { color: isActive ? '#FFFFFF' : '#9087E5', fontSize: Platform.isPad? vs(16) : s(16), marginLeft: Platform.isPad? vs(15) : s(15), fontWeight: '500'}]}>
                            {item.label}
                        </Text>

                    </Pressable>
                );
            })}
        </View>
    );
});

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
    },
    itemActive: {
        backgroundColor: '#9087E5',
    },
    text: {
        flexShrink: 1,
        fontWeight: '600',
    },
});
  

export default SliderContent;