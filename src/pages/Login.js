import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Neurax</Text>
            <Image style={styles.brainImg} source={require('../assets/brain.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        height: '100%'
    },
    title: {
        fontSize: 90,
        color: '#fff'
    },
    brainImg: {
        height: 160,
        width: 180,
        marginTop: 50
    }
})

export default Login;
