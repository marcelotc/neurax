import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import { PanGestureHandler, State } from 'react-native-gesture-handler'

import CerebroSvg from '../components/cerebro/cerebroSvg'

const SwiperTop = () => {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 300 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.containerTop,
      {
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [-350, 0, 300],
            outputRange: [-690, -370, -80],
            extrapolate: 'clamp'
          })
        }]
      }
      ]}>
        <CerebroSvg></CerebroSvg>
        <View style={styles.containerSlideTop} />
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: '#000',
    height: 430,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 500, height: 120, },
    shadowColor: 'black',
    shadowOpacity: 8.0,
  },
  containerSlideTop: {
    height: 5,
    backgroundColor: '#fff',
    width: 50,
    top: 190
  },
})

export default SwiperTop;