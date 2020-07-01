import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CerebroSvg from '../../components/cerebro/cerebroResultadoSvg';

const resultado = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>

            <View style={styles.brainContainer}>
                <CerebroSvg></CerebroSvg>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    brainContainer: {
        backgroundColor: '#000',
        height: '40%',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
});

export default resultado;
