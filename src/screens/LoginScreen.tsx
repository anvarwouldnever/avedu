import { View, Text, SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { useScale } from '../hooks/useScale';
import { store } from '../store/store';
import ChooseLanguage from './Login/ChooseLanguage';
import Inputs from './Login/Inputs';
import LoginButton from './Login/LoginButton';

const LoginScreen = () => {

    const { s, vs } = useScale()
    const [phone, setPhone] = useState<string>('+998 ');
    const [password, setPassword] = useState<string>(null);
    const [errorMessage, setErrorMessage] = useState<string>(null);
    const [thinking, setThinking] = useState<boolean>(false);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#EFEEFC' }}>
            
            <View style={{ flex: 1, paddingHorizontal: vs(20), paddingVertical: vs(60), rowGap: vs(25), backgroundColor: '#EFEEFC', height: 'auto', alignItems: 'center'}}>
                
                <ChooseLanguage thinking={thinking} />

                <Inputs phone={phone} setPhone={setPhone} setPassword={setPassword} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />

                {errorMessage && <Text style={{color: '#EB265D', textAlign: 'center'}}>{errorMessage}</Text>}

                <LoginButton phone={phone} password={password} setErrorMessage={setErrorMessage} setThinking={setThinking} thinking={thinking}/>

            </View>

        </SafeAreaView>
    )
}

export default LoginScreen