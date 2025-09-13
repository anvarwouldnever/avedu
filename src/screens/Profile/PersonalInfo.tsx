import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { withTiming } from 'react-native-reanimated'
import { useScale } from '../../hooks/useScale'
import { putProfile } from './hooks/putProfile'
import { store } from '../../store/store' // <- импорт store
import ChooseLanguage from '../Login/ChooseLanguage'
import { observer } from 'mobx-react-lite'

const PersonalInfo = ({ translateY, defaultFirstName, defaultLastName, defaultFatherName, defaultPhone, defaultAddress, profile, birthday, gender, email, fullAddress }) => {

    const { s, vs } = useScale()

    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [fatherName, setFatherName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [address, setAddress] = useState<string>();

    const [showSaveButton, setShowSaveButton] = useState<boolean>(false);

    const defaultsRef = useRef({
        firstName: defaultFirstName,
        lastName: defaultLastName,
        fatherName: defaultFatherName,
        phone: defaultPhone,
        address: defaultAddress
    });

    useEffect(() => {
        if (profile) {
            setFirstName(defaultFirstName);
            setLastName(defaultLastName);
            setFatherName(defaultFatherName);
            setPhone(defaultPhone);
            setAddress(defaultAddress);
        
            defaultsRef.current = {
                firstName: defaultFirstName,
                lastName: defaultLastName,
                fatherName: defaultFatherName,
                phone: defaultPhone,
                address: defaultAddress
            };
      
            setShowSaveButton(false);
        }
    }, [profile]);

    useEffect(() => {
        const hasChanges = firstName !== defaultsRef.current.firstName || lastName !== defaultsRef.current.lastName || fatherName !== defaultsRef.current.fatherName || phone !== defaultsRef.current.phone || address !== defaultsRef.current.address;
        const allFilled = firstName?.trim() && lastName?.trim() && fatherName?.trim() && phone?.trim() && address?.trim();
        setShowSaveButton(hasChanges && !!allFilled);
    }, [firstName, lastName, fatherName, phone, address]);

    const { updateProfile, loading, error } = putProfile()

    const handleSave = async() => {
        try {
            await updateProfile(firstName, lastName, fatherName, gender, birthday, email, { title: fullAddress?.title, address })
            console.log("✅ Профиль обновлён");

            defaultsRef.current = { firstName, lastName, fatherName, phone, address };
            setShowSaveButton(false);           
        } catch (e) {
            console.log("❌ Ошибка при обновлении");
        }
    };

    return (
        <View style={{ width: '100%', height: 'auto', padding: vs(15), rowGap: vs(15), flexDirection: 'column', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                        
            <Text style={{ fontSize: vs(14), fontWeight: '500' }} >
                {store.text?.prime_info || 'Личная информация'}
            </Text>

            <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder={store.text?.l_name || 'Фамилия'}
                style={[{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: firstName === ''? '#E05A9A' : '#EFEEFC' }]}
            />

            <TextInput 
                value={lastName}
                onChangeText={setLastName}
                placeholder={store.text?.f_name || 'Имя'}
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: lastName === ''? '#E05A9A' : '#EFEEFC' }}
                onFocus={() => { translateY.value = withTiming(-50, { duration: 300 }) }}
                onBlur={() => { translateY.value = withTiming(0, { duration: 300 }) }}
            />

            <TextInput 
                value={fatherName}
                onChangeText={setFatherName}
                placeholder={store.text?.fname || 'Отчество'}
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: fatherName === ''? '#E05A9A' : '#EFEEFC' }}
                onFocus={() => { translateY.value = withTiming(-130, { duration: 300 }) }}
                onBlur={() => { translateY.value = withTiming(0, { duration: 300 }) }}
            />

            <Text style={{ fontSize: vs(14), fontWeight: '500' }}>
                {store.text?.info || 'Контактная информация'}
            </Text>

            <TextInput
                value={phone} 
                onChangeText={setPhone}
                placeholder={store.text?.mobile_phone || 'Номер телефона'}
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: phone === ''? '#E05A9A' : '#EFEEFC' }}
                onFocus={() => { translateY.value = withTiming(-255, { duration: 300 }) }}
                onBlur={() => { translateY.value = withTiming(0, { duration: 300 }) }}
            />

            <TextInput 
                value={address}
                onChangeText={setAddress}
                placeholder={store.text?.adres_real || 'Адрес проживания'}
                style={{ width: '100%', fontSize: vs(14), borderWidth: 1, padding: vs(15), borderRadius: vs(20), borderColor: address === ''? '#E05A9A' : '#EFEEFC' }}
                onFocus={() => { translateY.value = withTiming(-300, { duration: 300 }) }}
                onBlur={() => { translateY.value = withTiming(0, { duration: 300 }) }}
            />

            { showSaveButton && 
                <TouchableOpacity onPress={handleSave} style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: vs(46), backgroundColor: '#6A5AE0', borderRadius: vs(15), width: '47%', shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7 }}>
                    { loading ?
                        <ActivityIndicator color={'white'} size={'small'} />
                    :
                        <Text style={{ fontSize: vs(14), fontWeight: '500', color: 'white' }}>
                            {store.text?.btn_save || 'Сохранить'}
                        </Text>}
                </TouchableOpacity>
            }

        </View>
    )
}

export default observer(PersonalInfo)
