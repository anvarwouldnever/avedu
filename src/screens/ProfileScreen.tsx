import React from 'react'
import { useScale } from '../hooks/useScale'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import MainInfo from './Profile/MainInfo'
import PersonalInfo from './Profile/PersonalInfo'
import Buttons from './Profile/Buttons'
import { getProfile } from './Profile/hooks/getProfile'
import Slider from '../navigation/Slider/Slider'
import SliderContent from '../navigation/Slider/SliderContent'

const ProfileScreen = () => {

    const { s, vs } = useScale();

    const translateY = useSharedValue<number>(0);

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

    const gender = profile?.gender;
    const email = profile?.email;

    const phone = profile?.phone;
    const address = { address: profile?.address?.address, title: profile?.address?.title }

    return (
        <Animated.ScrollView contentContainerStyle={{ alignItems: 'center', rowGap: vs(25), padding: vs(20), flex: 1 }} style={[ animatedUp, { backgroundColor: 'white' }]}>
            
            <MainInfo name={name} birthday={birthday} children={children} />

            <PersonalInfo gender={gender} birthday={birthday} email={email} profile={profile} translateY={translateY} defaultFirstName={firstName} defaultLastName={lastName} defaultFatherName={fatherName} defaultPhone={phone} defaultAddress={address?.address} fullAddress={address} />

            <Buttons />

            <Slider>
                <SliderContent />
            </Slider>

        </Animated.ScrollView>
    )
}

export default ProfileScreen;