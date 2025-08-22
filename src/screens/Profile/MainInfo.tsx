import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { useScale } from '../../hooks/useScale'

const MainInfo = ({ name, birthday, children }) => {

    const { s, vs } = useScale()

    return (
        <View style={{ width: '100%', height: 'auto', padding: vs(15), flexDirection: 'row', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                        
            <Image source={require('../../../assets/testimage.jpeg')} style={{ width: vs(85), height: vs(85), borderRadius: 100 }} contentFit='contain' />

            <View style={{ height: 'auto', width: '60%', justifyContent: 'space-around' }}>

                <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{name}</Text>

                <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                    <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>Дата рождения:</Text>
                    <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{birthday}</Text>
                </View>                            

                <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                    <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>Количество детей:</Text>
                    <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{children}</Text>
                </View>

            </View>
        
        </View>
    )
}

export default MainInfo