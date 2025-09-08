import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { observer } from 'mobx-react-lite';
import MaskInput from 'react-native-mask-input';

const Inputs = ({ setPhone, setPassword, errorMessage, setErrorMessage, phone }) => {

    const { s, vs, isTablet } = useScale();

    return (
        <View style={{ width: '100%', height: 'auto', gap: vs(15) }}>
            
            <View style={{ rowGap: vs(10), width: '100%' }}>
                
                <Text style={{ fontSize: isTablet ? vs(14) : vs(12) }}>Введите номер телефона</Text>
                
                <MaskInput
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: vs(40),
                        borderRadius: 15,
                        paddingHorizontal: 20,
                        fontSize: isTablet ? vs(14) : vs(12),
                        borderColor: errorMessage ? '#EB265D' : 'white',
                        borderWidth: 2,
                        textAlignVertical: 'center',
                        verticalAlign: 'middle'
                    }}
                    value={phone}
                    onChangeText={(masked, unmasked) => {
                        if (errorMessage) setErrorMessage(null);

                        if (!masked.startsWith('+998')) {
                            masked = '+998';
                            unmasked = '9928';
                        }

                        setPhone(masked);
                    }}
                    mask={[
                        '+', '9', '9', '8', ' ',
                        '(', /\d/, /\d/, ')', ' ',
                        /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/
                    ]}
                    keyboardType="numeric"
                    placeholder="+998 (__) ___-__-__"
                />
                
            </View>

            <View style={{gap: vs(10), width: '100%' }}>
                
                <Text style={{ fontSize: isTablet ? vs(14) : vs(12) }}>Введите пароль</Text>
                
                <TextInput 
                    style={{ backgroundColor: 'white', width: '100%', height: vs(40), borderRadius: 15, paddingHorizontal: 20, fontSize: isTablet? vs(14) : vs(12), borderColor: errorMessage? '#EB265D' : 'white', borderWidth: 2, textAlignVertical: 'center', verticalAlign: 'middle' }}
                    placeholder={'Пароль'}
                    onChangeText={(text) => {

                        if (errorMessage !== null) {
                            setErrorMessage(null)
                        }

                        setPassword(text)
                    }}
                    secureTextEntry
                    autoCapitalize="none"
                    textContentType="password"
                    autoCorrect={false}
                    onFocus={() => setErrorMessage(prev => (prev != null ? null : prev))}
                />

            </View>

        </View>
    )
}

export default observer(Inputs);