import { Image } from 'expo-image';
import React from 'react'

const Logo = () => {
    return <Image contentFit='contain' source={require('../../assets/logo.png')} style={{width: 100, height: 60, marginLeft: 15}}/>
}

export default Logo;