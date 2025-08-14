import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WithSliderWrapper from './src/navigation/Navigation/WithSliderWrapper';

const App = () => {



    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <WithSliderWrapper />
            
        </GestureHandlerRootView>
    )
}

export default App;