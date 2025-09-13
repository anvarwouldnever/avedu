import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useScale } from '../hooks/useScale';
import ChooseLanguage from './Login/ChooseLanguage';
import Inputs from './Login/Inputs';
import LoginButton from './Login/LoginButton';
import useLock from '../hooks/useLock';
import { getText } from './Login/hooks/getText';
import { observer } from 'mobx-react-lite';
import * as SplashScreen from 'expo-splash-screen';

const LoginScreen = () => {

    const { error, loading } = getText()
    useLock()

    const { s, vs } = useScale()

    const [phone, setPhone] = useState<string>('+998 ');
    const [password, setPassword] = useState<string>(null);
    const [errorMessage, setErrorMessage] = useState<string>(null);
    const [thinking, setThinking] = useState<boolean>(false);

    useEffect(() => {
        if (!loading) {
            SplashScreen.hideAsync();
        }
    }, [loading])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EFEEFC' }}>
            
            <View style={{ flex: 1, paddingHorizontal: vs(20), paddingVertical: vs(60), rowGap: vs(25), backgroundColor: '#EFEEFC', height: 'auto', alignItems: 'center'}}>
                
                <ChooseLanguage color={'#EFEEFC'} thinking={thinking} />

                <Inputs phone={phone} setPhone={setPhone} setPassword={setPassword} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

                {errorMessage && <Text style={{color: '#EB265D', textAlign: 'center'}}>{errorMessage}</Text>}

                <LoginButton phone={phone} password={password} setErrorMessage={setErrorMessage} setThinking={setThinking} thinking={thinking}/>

            </View>

        </SafeAreaView>
    )
}

export default observer(LoginScreen)