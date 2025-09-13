import { View, Text } from 'react-native'
import React from 'react'
import { useScale } from '../../hooks/useScale'
import ProgressBorder from '../../components/ProgressBorder'
import { Ionicons } from '@expo/vector-icons'
import { getProgress } from './hooks/getProgress'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'

const ChildStats = () => {

    const { s, vs, isTablet } = useScale()

    const { progress, loading, error } = getProgress()

    return (
        <View style={{ backgroundColor: 'white', width: '100%', marginTop: vs(25), borderRadius: vs(30), padding: isTablet? vs(20) : s(20), gap: vs(35), shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 7, }}>
            
            <Text style={{ color: 'black', fontSize: vs(18), fontWeight: '600' }}>{store.text?.placeholders?.quater_header}</Text>

            <View style={{ width: '100%', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: vs(24) }}>

                <View style={{ width: '46%', height: 'auto', alignItems: 'center', gap: vs(12) }}>
                    
                    <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '400' }}>1 {store.text?.placeholders?.quater}</Text>
                    
                    <ProgressBorder size={vs(130)} percent={Math.round(77)} baseColor={'#F5F5F5'} color={'#E05A9A'}/>

                </View>
                
                <View style={{ width: '46%', height: 'auto', alignItems: 'center', gap: vs(12) }}>
                    
                    <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '400' }}>2 {store.text?.placeholders?.quater}</Text>
                    
                    <ProgressBorder size={vs(130)} percent={Math.round(80)} baseColor={'#F5F5F5'} color={'#5AE0C0'}/>

                </View>

                <View style={{ width: '46%', height: 'auto', alignItems: 'center', gap: vs(12) }}>
                    
                    <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '400' }}>3 {store.text?.placeholders?.quater}</Text>
                    
                    <ProgressBorder size={vs(130)} percent={Math.round(20)} baseColor={'#F5F5F5'} color={'#59E956'}/>

                </View>

                <View style={{ width: '46%', height: 'auto', alignItems: 'center', gap: vs(12) }}>
                    
                    <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '400' }}>4 {store.text?.placeholders?.quater}</Text>
                    
                    <ProgressBorder size={vs(130)} percent={Math.round(59)} baseColor={'#F5F5F5'} color={'#E05A5A'}/>

                </View>
                
            </View>

            <View style={{ width: '100%', height: 'auto', rowGap: vs(24) }}>
                
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', columnGap: vs(10) }}>

                    <Ionicons name='person-circle' color={'#9087E5'} size={vs(45)} />

                    <View style={{ width: '80%', height: 'auto', rowGap: vs(5), justifyContent: 'center' }}>

                        <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '600', color: 'black' }}>0.0</Text>

                        <Text style={{ fontSize: isTablet ? vs(16) : vs(14), fontWeight: '400', color: 'grey' }}>{store.text?.precent_visit}</Text>

                    </View>

                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', columnGap: vs(10) }}>

                    <Ionicons name='warning' color={'#9087E5'} size={vs(45)} />

                    <View style={{ width: '80%', height: 'auto', rowGap: vs(5), justifyContent: 'center' }}>

                        <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '600', color: 'black' }}>0</Text>

                        <Text style={{ fontSize: isTablet ? vs(16) : vs(14), fontWeight: '400', color: 'grey' }}>жалобы от учителей</Text>

                    </View>

                </View>

                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', columnGap: vs(10) }}>

                    <Ionicons name='ribbon' color={'#9087E5'} size={vs(45)} />

                    <View style={{ width: '80%', height: 'auto', rowGap: vs(5), justifyContent: 'center' }}>

                        <Text style={{ fontSize: isTablet ? vs(18) : vs(16), fontWeight: '600', color: 'black' }}>0</Text>

                        <Text style={{ fontSize: isTablet ? vs(16) : vs(14), fontWeight: '400', color: 'grey' }}>{store.text?.count_five}</Text>

                    </View>

                </View>

            </View>

        </View>
    )
}

export default observer(ChildStats);