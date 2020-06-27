import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonNext from '../../components/buttons/ButtonNext'

const pageOne = (props) => {
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo(a) ao <Text style={{ fontWeight: 'bold' }}>Neurax</Text>,</Text>

            <Text style={styles.text}>Um aplicativo de <Text style={{ fontWeight: 'bold' }}>aperfeiçoamento pessoal</Text> através da investigação dos lobos cerebrais.</Text>
            <Text style={styles.text}>O que são os <Text style={{ fontWeight: 'bold' }}>lobos cerebrais?</Text></Text>
            <Text style={styles.text}>O cortex cerebral está dividido em  áreas denominadas lobos cerebrais, cada uma com <Text style={{ fontWeight: 'bold' }}>funções específicas</Text>. </Text>

            <ButtonNext navigate={navigate} page={'pageTwo'}></ButtonNext>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 30,
        marginTop: 30,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 30,
        marginTop: 60,
        marginBottom: 20,
        width: '80%',
    },
})

export default pageOne;
