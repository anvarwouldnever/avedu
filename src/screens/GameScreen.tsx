import { View, ImageBackground, Platform, TouchableOpacity} from 'react-native'
import React, { useCallback, useState } from 'react'
import { useScale } from '../hooks/useScale'
import { bgAssets } from '../components/BgAssets'
import { store } from '../store/store'
import { observer } from 'mobx-react-lite'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import * as ScreenOrientation from 'expo-screen-orientation'
import GameNumberList from './Game/GameNumberList'
import GameView from './Game/GameView'
import Modal from 'react-native-modal'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { getGames } from './Game/hooks/getGames'

const GameScreen = ({ route }) => {    

    const { games, error, loading } = getGames(route?.params?.id)

    const { s, vs, windowWidth, windowHeight } = useScale()
    const [chosenGame, setChosenGame] = useState(1);
    const [fullImage, setFullImage] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<string>(null);
    const gameType = games[chosenGame]?.type

    useFocusEffect(
        useCallback(() => {
            async function changeScreenOrientation() {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
            }
            changeScreenOrientation();
        }, [])
    );

    return (
        <ImageBackground resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} source={bgAssets[store.backgroundImage] ?? bgAssets[1]}>
            <View style={{flex: 1, justifyContent: 'space-between', paddingVertical: Platform.isPad ? vs(20) : s(7), paddingLeft: Platform.isPad ? s(10) : s(20), paddingRight: s(10), flexDirection: 'row'}}>
                <GameView game={games[chosenGame - 1]} setFullImage={setFullImage} setSelectedImage={setSelectedImage}/>
                <GameNumberList games={games} setChosenGame={setChosenGame} chosenGame={chosenGame}/>
                
                <Modal animationOutTiming={10} animationOut={'fadeOut'} isVisible={fullImage} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', left: s(80), top: vs(45)}}>
                    <View style={{width: s(150), height: vs(500), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center'}}>
                        <TouchableOpacity onPress={() => setFullImage(false)} style={{ zIndex: 2, width: vs(70), height: vs(70), position: 'absolute', left: 5, top: 5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                            <Ionicons name='close-circle-outline' size={vs(70)}/>
                        </TouchableOpacity>
                        {selectedImage && (
                            <Image 
                                style={{ width: s(100), height: vs(450)}} 
                                source={selectedImage} 
                                contentFit='contain' 
                            />
                        )}
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    )
}

export default observer(GameScreen);

