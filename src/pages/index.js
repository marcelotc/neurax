import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';

import SwiperTop from './SwiperTop';
import SwiperBottom from './SwiperBottom';

import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Menu from '../components/menu/';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
    console.disableYellowBox = true; // A lib SideMenu da um warning  

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const updateMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <SideMenu
                    menu={<Menu></Menu>}
                    isOpen={isOpen}
                    onChange={(isOpen) => updateMenu(isOpen)}
                    animationFunction={(prop, value) =>
                        Animated.spring(prop, {
                            toValue: value,
                            friction: 10,
                            useNativeDriver: true,
                        })
                    }
                >
                    <View style={[{ flex: 1 }, styles.container]}>
                        <SwiperTop></SwiperTop>
                        <View style={styles.menuButtonContainer}>
                            <TouchableWithoutFeedback style={styles.menuButon} onPress={() => toggle()}>
                                <Icon
                                    name="menu"
                                    color="#fff"
                                    size={30}
                                ></Icon>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.calendarContainer}>
                            <Text style={{ color: '#fff', fontSize: 30 }}>Calendário</Text>
                        </View>
                        <SwiperBottom></SwiperBottom>
                    </View>
                </SideMenu>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    menuButtonContainer: {
        position: 'absolute',
        width: '50%',
        height: '50%',
        top: 10,
        left: 50,
        width: 50,
        height: 50,
    },
    calendarContainer: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        top: 100,
        left: 0,
        backgroundColor: '#000',
        zIndex: -1,
        borderColor: 'blue',
        borderWidth: 10
    },
    calendar: {
        backgroundColor: '#000',
    },
    container: {
        backgroundColor: '#fff'
    },
    menuButon: {

    }
})

export default App;
