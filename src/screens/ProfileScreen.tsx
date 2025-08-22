import React from 'react'
import { useScale } from '../hooks/useScale'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import MainInfo from './Profile/MainInfo'
import PersonalInfo from './Profile/PersonalInfo'
import Buttons from './Profile/Buttons'
import { getProfile } from './Profile/hooks/getProfile'

const ProfileScreen = () => {

    const { s, vs } = useScale();

    const translateY = useSharedValue<number>(0)

    const animatedUp = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        }
    })

    const { profile, loading, error } = getProfile()

    const name = profile?.full_name;
    const birthday = profile?.birthday;
    const children = profile?.clients.length;

    const lastName = profile?.last_name;
    const firstName = profile?.first_name;
    const fatherName = profile?.father_name;

    const phone = profile?.phone;
    const address = profile?.address?.address;

    return (
        <Animated.ScrollView contentContainerStyle={{ alignItems: 'center', rowGap: vs(25) }} style={[ animatedUp, { flex: 1, padding: vs(20), backgroundColor: 'white' }]}>
            
            <MainInfo name={name} birthday={birthday} children={children} />

            <PersonalInfo profile={profile} translateY={translateY} defaultFirstName={firstName} defaultLastName={lastName} defaultFatherName={fatherName} defaultPhone={phone} defaultAddress={address} />

            <Buttons />

        </Animated.ScrollView>
    )
}

export default ProfileScreen;