import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';

import SwiperTop from './SwiperTop';
import SwiperBottom from './SwiperBottom';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <>
            <View>
                <StatusBar hidden />
                <SwiperTop></SwiperTop>
                <View style={styles.calendar}>
                    <Text style={{ color: '#fff' }}>Calendário</Text>
                </View>
                <SwiperBottom></SwiperBottom>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: '#000',
    },
})

export default App;
