import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import WithSliderWrapper from './src/navigation/Navigation/WithSliderWrapper';
import * as SplashScreen from 'expo-splash-screen';
import { checkNetwork } from './src/utils/checkNetwork';
import NoNetworkScreen from './src/components/NoNetwork';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
    duration: 1000,
    fade: true
});

const App = () => {

    const [hasNetwork, setHasNetwork] = useState<boolean | null>(null);

    const initialize = async () => {
        try {
            const network = await checkNetwork();
            setHasNetwork(network);
        } catch (e) {
            setHasNetwork(false);
        } finally {
            await SplashScreen.hideAsync();
        }
    };

    useEffect(() => {
        initialize();
    }, []);

    if (hasNetwork === null) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {hasNetwork ? (
                <WithSliderWrapper />
            ) : (
                <NoNetworkScreen onRetry={initialize} />
            )}
        </GestureHandlerRootView>
    )
}

export default App;