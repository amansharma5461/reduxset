



import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const ImageViewer = ({ imageUri }) => {
  const panX = useSharedValue(0);
  const panY = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const panGestureHandler = Animated.event(
    [
      {
        nativeEvent: {
          translationX: (e) => (panX.value = e),
          translationY: (e) => (panY.value = e),
        },
      },
    ],
    { useNativeDriver: true }
  );

  const pinchGestureHandler = Animated.event(
    [
      {
        nativeEvent: { scale: (e) => (scale.value = e) },
      },
    ],
    { useNativeDriver: true }
  );

  const rotationGestureHandler = Animated.event(
    [
      {
        nativeEvent: { rotation: (e) => (rotation.value = e) },
      },
    ],
    { useNativeDriver: true }
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: panX.value },
        { translateY: panY.value },
        { scale: scale.value },
        { rotateZ: `${rotation.value}rad` },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View>
          <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
            <Animated.View>
              <RotationGestureHandler onGestureEvent={rotationGestureHandler}>
                <Animated.Image
                  source={{ uri: imageUri }}
                  style={[styles.image, animatedStyle]}
                  resizeMode="contain"
                />
              </RotationGestureHandler>
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.8,
  },
});

export default ImageViewer;
