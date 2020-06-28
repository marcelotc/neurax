import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonNext from '../../components/buttons/ButtonNext'
import ButtonPrev from '../../components/buttons/ButtonPrev'

const pageThree = (props) => {
    const { navigate, goBack } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Como o Neurax funciona?</Text>
            <Text style={styles.text}>Você irá responder uma série de perguntas e baseadas nelas será dado um relatório com o <Text style={{ fontWeight: 'bold' }}>nível de qualidade</Text> de seus lobos cerebrais.</Text>
            <Text style={styles.text}>Com este resultado o app irá dar dicas de <Text style={{ fontWeight: 'bold' }}>atividades práticas</Text> que você poderá executar durante sua rotina.</Text>
            <Text style={styles.text}>A cada <Text style={{ fontWeight: 'bold' }}>atividade completada</Text> seu nível de qualidade aumenta, o contrário, diminui.</Text>

            <ButtonNext navigate={navigate} page={'login'}></ButtonNext>
            <ButtonPrev goBack={goBack}></ButtonPrev>
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
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 60,
        marginBottom: 5,
    },
})

export default pageThree;
