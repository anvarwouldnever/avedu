import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDER_WIDTH = SCREEN_WIDTH * 0.75;

const Slider = ({
  children,
  isOpen,
  onClose,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}) => {
  const translateX = useSharedValue(-SLIDER_WIDTH);

  React.useEffect(() => {
    translateX.value = withSpring(isOpen ? 0 : -SLIDER_WIDTH, {
        damping: 25,
        stiffness: 200,
      });
  }, [isOpen]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX > 0) {
        translateX.value = -SLIDER_WIDTH + event.translationX;
      }
    })
    .onEnd((event) => {
      if (event.translationX > SLIDER_WIDTH / 3) {
        translateX.value = withSpring(-SLIDER_WIDTH);
        runOnJS(onClose?.bind(null))();
      } else {
        translateX.value = withSpring(0);
      }
    });

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={StyleSheet.absoluteFill}>
      {isOpen && (
        <Pressable style={styles.backdrop} onPress={onClose} />
      )}

        <Animated.View style={[styles.slider, sliderStyle]}>
          {children ?? (
            <Text style={{ color: 'white', fontSize: 18 }}>Пусто</Text>
          )}
        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SLIDER_WIDTH,
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 80,
    zIndex: 100,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    // Тень для Android
    elevation: 10,
  },
  backdrop: {
    position: 'absolute',
    left: SLIDER_WIDTH,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 50,
  },
});

export default Slider;
