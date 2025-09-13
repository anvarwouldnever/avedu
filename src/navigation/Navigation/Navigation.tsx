import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { Platform } from 'react-native';
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
import TaskScreen from '../../screens/TaskScreen';
import LoginScreen from '../../screens/LoginScreen';
import ChildrenScreen from '../../screens/ChildrenScreen';
import HeaderRight from './HeaderRight';

const Stack = createStackNavigator();

const Navigation = () => {

    const { s, vs } = useScale();
    const [key, setKey] = useState<boolean>(false)

    const token = SecureStore.getItem('token');
    const cid = SecureStore.getItem('cid');

    useEffect(() => {
        setKey(prev => !prev)
    }, [store?.pfp]);

    return (
        <Stack.Navigator id={undefined} screenOptions={{
            animation: 'default',
            title: '',
            headerStyle: {
                height: Platform.isPad? 130 : vs(130),
            },
            headerRight: () => (
                <HeaderRight />
            ),
            headerLeft: () => (
                <Logo />
            )
        }} initialRouteName={token && cid ? "Home" : token && !cid ? "Children" : (!token && !cid || !token && cid) && "Login"}>
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Children" options={{ headerShown: false }} component={ChildrenScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="Diary" component={DiaryScreen} />
            <Stack.Screen name="Schedule" component={ScheduleScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
        </Stack.Navigator>
    )
}

export default observer(Navigation);