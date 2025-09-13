import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useScale } from '../../hooks/useScale'
import * as SecureStore from 'expo-secure-store';
import { Login } from '../../api/methods/login/login';
import { store } from '../../store/store';
import { observer } from 'mobx-react-lite';

const LoginButton = ({ phone, password, setErrorMessage, setThinking, thinking }) => {

    const navigation = useNavigation();
    const { s, vs, isTablet } = useScale();

    const login = async() => {

        setErrorMessage(null)

        const rawPhone = '+' + phone.replace(/\D/g, ''); 

        if (!rawPhone || rawPhone.length !== 13) {
            setErrorMessage('Введите корректный номер телефона (+998XXXXXXXXX)');
            return;
        }
        
        if (!password) {
            setErrorMessage('Введите пароль');
            return;
        }

        try {
            setThinking(true)
            const response = await Login(rawPhone, password);
            const token = response?.data?.access?.accessToken;
            if (token) {
                await SecureStore.setItemAsync('token', token);

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Children' }],
                })
            } else {
                throw new Error('Токен не получен с сервера');
            }
        } catch (e) {
            console.log(e?.response?.data)
            setErrorMessage('Неправильный номер или пароль')
        } finally {
            setThinking(false)
        }
    }

    return (
        <TouchableOpacity onPress={(!phone || !password ) ? () => {} : () => login()} style={{ width: '100%', height: isTablet? vs(45) : s(45), opacity: !phone || !password ? 0.5 : 1, backgroundColor: '#6A5AE0', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            
            {thinking ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={{ color: 'white', fontWeight: '600', fontSize: isTablet? vs(16) : vs(14) }}>{store.text?.buttons?.login_enter}</Text>
            )}
            
        </TouchableOpacity>
    )
}

export default observer(LoginButton);