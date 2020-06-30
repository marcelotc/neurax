import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import questions from './pesquntasObject';

const questionario = () => {
    const [checkedArray, setCheckedArray] = useState(Array(questions.length).fill('nao'));

    const submitAnswers = () => {
        const results = []
        const lobes = []
        var objArray = []
        for (var answers in checkedArray) {
            results.push(checkedArray[answers])
        }
        questions.map((data) => {
            lobes.push(data.lobe)
        })
        lobes.forEach((v, i) => {
            var obj = {};
            obj[v] = results[i]
            objArray.push(obj)
        })

        alert(JSON.stringify(objArray))
    }

    const handleOnValueChange = (i, value) => {
        //checkedArray.splice(value.idx, 1);
        console.log(checkedArray)

        checkedArray.splice(i, 1, value);

        setCheckedArray([...checkedArray]);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perguntas de configuração</Text>
            <>
                <View style={{ marginTop: 50, height: '60%' }} >
                    <ScrollView style={styles.questionsContainer} persistentScrollbar={true}>
                        <View style={{ marginLeft: 20, marginRight: 15, marginTop: 40 }}>

                            {questions.map((data, i) => (
                                <RadioButton.Group key={String(i)} onValueChange={(value) => handleOnValueChange(i, value)} value={checkedArray[i]}>
                                    <Text style={styles.text}>
                                        {i + 1} - {data.question}
                                    </Text>
                                    <Text style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}>
                                        {data.atividades}
                                    </Text>
                                    <View style={styles.radioButtonContainer}>
                                        <RadioButton
                                            value='sim'
                                            color="#fff"
                                            uncheckedColor="#fff"
                                        />
                                        <Text style={styles.radioText}>Sim </Text>
                                    </View>
                                    <View style={styles.radioButtonContainer}>
                                        <RadioButton
                                            value='nao'
                                            color="#fff"
                                            uncheckedColor="#fff"
                                        />
                                        <Text style={styles.radioText}>Não </Text>
                                    </View>
                                </RadioButton.Group>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <Text style={styles.askedQuestions}>3 de {questions.length} perguntas respondidas</Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={submitAnswers}>
                        <Text style={styles.buttonText}>Finalizar questionário</Text>
                    </TouchableOpacity>
                </View>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20
    },
    questionsContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: "center",
        bottom: 10,
        opacity: 0.2
    },
    button: {
        backgroundColor: '#212121',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 30
    },
    radioText: {
        color: '#fff',
        fontSize: 23,
        marginLeft: 10
    },
    askedQuestions: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
})

export default questionario;
