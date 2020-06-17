import React from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Legenda from '../components/legenda'

const HEIGHT = Dimensions.get('window').height;

const SwiperBottom = () => {
    let offset = 0;

    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                }
            }
        ],
        { useNativeDriver: true }
    )

    function onHandlerStateChange(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            // translateY.setOffset(offset);
            // translateY.setValue(0);

            if (translationY <= 10) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? -380 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = opened ? -380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
        >
            <Animated.View style={[styles.containerBottom,
            {
                transform: [{
                    translateY: translateY.interpolate({
                        inputRange: [-350, 0, 380],
                        outputRange: [10, HEIGHT - 480, 380],
                        extrapolate: 'clamp'
                    }),
                }]
            }]}>
                <Legenda />
                <View style={styles.containerSlideBottom} />
            </Animated.View>
        </PanGestureHandler>
    );
}

const styles = StyleSheet.create({
    containerBottom: {
        backgroundColor: '#000',
        height: 430,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSlideBottom: {
        height: 5,
        backgroundColor: '#fff',
        width: 50,
        top: -260
    }
})

export default SwiperBottom;