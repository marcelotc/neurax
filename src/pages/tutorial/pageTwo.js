import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonNext from '../../components/buttons/ButtonNext'
import ButtonPrev from '../../components/buttons/ButtonPrev'

const pageTwo = (props) => {
    const { navigate, goBack } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Lobo Fontal</Text>
                <Text style={styles.text}>Memória, atividades motoras, escrita, fala...</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.titulo}>Lobo temporal</Text>
                <Text style={styles.text}>Audição, reconhecimento de objetos, memória...</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.titulo}>Lobo parietal</Text>
                <Text style={styles.text}>Toque, dor, temperatura, pressão, sensações do corpo...</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.titulo}>Lobo occipital</Text>
                <Text style={styles.text}>Visão processamento e percepção visual...</Text>
            </View>
            <ButtonNext navigate={navigate} page={'pageThree'}></ButtonNext>
            <ButtonPrev goBack={goBack} ></ButtonPrev>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    box: {
        marginLeft: 30,
        marginTop: 20,
    },
    titulo: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
})

export default pageTwo;
