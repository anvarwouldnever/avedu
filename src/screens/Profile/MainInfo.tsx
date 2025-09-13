import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import { store } from '../../store/store' // импорт твоего mobx store
import { observer } from 'mobx-react-lite'

const MainInfo = ({ name, birthday, children }) => {

    const { s, vs } = useScale()

    return (
        <View style={{ width: '100%', height: 'auto', padding: vs(15), flexDirection: 'row', columnGap: vs(15), backgroundColor: 'white', borderRadius: vs(20), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
                        
            <View style={{ width: vs(80), height: vs(80), backgroundColor: '#6A5AE0', paddingHorizontal: vs(20), paddingVertical: vs(10), borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: vs(40), color: 'white' }}>{name?.[0]?.toUpperCase() || ''}</Text>
            </View>

            <View style={{ height: 'auto', width: '60%', justifyContent: 'space-around' }}>

                <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{name}</Text>

                <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                    <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>
                        {store.text?.dbd || 'Дата рождения:'}
                    </Text>
                    <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{birthday}</Text>
                </View>                            

                <View style={{ width: '100%', flexDirection: 'row', columnGap: vs(5), height: 'auto' }}>
                    <Text style={{ fontSize: vs(14), fontWeight: '500', color: '#59E956' }}>
                        {store.text?.child_count || 'Количество детей:'}
                    </Text>
                    <Text style={{ fontSize: vs(14), fontWeight: '500' }}>{children}</Text>
                </View>

            </View>
        
        </View>
    )
}

export default observer(MainInfo)
