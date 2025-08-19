import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Platform } from 'react-native';
import { useScale } from '../../hooks/useScale';
import { store } from '../../store/store';
import { observer } from 'mobx-react-lite';
import * as SecureStore from 'expo-secure-store';
import Logo from '../../components/Logo';
import AnnouncementsScreen from '../../screens/AnnouncementsScreen';
import TasksScreen from '../../screens/TasksScreen';
import DiaryScreen from '../../screens/DiaryScreen';
import ScheduleScreen from '../../screens/ScheduleScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = ({ openSlider } : { openSlider: () => void }) => {

    const { s, vs } = useScale();
    const [key, setKey] = useState<boolean>(false)
    const token = SecureStore.getItem('access_token');

    const navigation = useNavigation();

    useEffect(() => {
        setKey(prev => !prev)
    }, [store.pfp]);

    return (
        <Stack.Navigator id={undefined} screenOptions={{
            animation: 'default',
            title: '',
            headerStyle: {
                height: Platform.isPad? 130 : vs(130),
            },
            headerRight: () => (
                <View style={{marginRight: 15, flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        activeOpacity={0.8}
                    >
                        <Ionicons 
                            size={vs(50)}
                            name='person-circle'
                            color={'#6A5AE0'}
                        />
                    </TouchableOpacity> 

                    <TouchableOpacity onPress={() => openSlider()}>
                        <Ionicons name="menu" size={vs(50)} color="black" />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: () => (
                <Logo />
            )
        }} initialRouteName={token? "Home" : "Home"}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default observer(Navigation);