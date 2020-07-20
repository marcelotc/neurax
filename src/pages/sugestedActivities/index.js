import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import activitiesObject from './activitiesObject';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window')

const sugestedActivities = (props) => {
    const { navigate } = props.navigation;

    /*const results = useSelector(state => state.resultado);

    const frontalNivel = results.find(l => { return l.lobe === 'frontal' })
    const parietalNivel = results.find(l => { return l.lobe === 'parietal' })
    const occipitalNivel = results.find(l => { return l.lobe === 'occipital' })
    const temporalNivel = results.find(l => { return l.lobe === 'temporal' })

    console.log(frontalNivel.numberOfAcitivities)
    console.log(temporalNivel.numberOfAcitivities)
    console.log(occipitalNivel.numberOfAcitivities)
    console.log(parietalNivel.numberOfAcitivities)*/

    const frontalActivities = activitiesObject.filter((l) => { return l.lobe === 'frontal' })
    var frontalAct = frontalActivities.sort(() => Math.random() - Math.random()).slice(0, 1)

    const temporalActivities = activitiesObject.filter((l) => { return l.lobe === 'temporal' })
    var temporalAct = temporalActivities.sort(() => Math.random() - Math.random()).slice(0, 1)

    const occipitalActivities = activitiesObject.filter((l) => { return l.lobe === 'occipital' })
    var occipitalAct = occipitalActivities.sort(() => Math.random() - Math.random()).slice(0, 2)

    const parietalActivities = activitiesObject.filter((l) => { return l.lobe === 'parietal' })
    var parietalAct = parietalActivities.sort(() => Math.random() - Math.random()).slice(0, 3)

    /*console.log('frontalAct', frontalAct)
    console.log('temporalAct', temporalAct)
    console.log('occipitalAct', occipitalAct)
    console.log('parietalAct', parietalAct)*/

    let randomActivities = []

    frontalAct.forEach((elem) => {
        randomActivities.push(elem)
    })

    temporalAct.forEach((elem) => {
        randomActivities.push(elem)
    })

    occipitalAct.forEach((elem) => {
        randomActivities.push(elem)
    })

    parietalAct.forEach((elem) => {
        randomActivities.push(elem)
    })

    console.log(randomActivities)

    const [selectedActivity, setSelectedActivity] = useState(Array(randomActivities.length).fill(false)) //Array.from({ length: activitiesObject.length }, _ => false)
    const [activitiesCount, setActivitiesCount] = useState(0);
    const [activityName] = useState([]);

    const toggleSelectedActivity = (data, index) => {
        setSelectedActivity(selectedActivity.map((bool, i) => i == index ? !bool : bool))

        activityName.push(data.activity)

        setActivitiesCount(activitiesCount + 1)

        selectedActivity.filter((x, i) => {
            if (index === i && x === true) {
                setActivitiesCount(activitiesCount - 1)
            }
        })
    }

    const selectedActivities = () => {
        const activitiesArray = []
        const count = {};
        activityName.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        function isOdd(n) {
            return Math.abs(n % 2) == 1;
        }
        for (let key in count) {
            if (isOdd(count[key])) {
                activitiesArray.push(key)
            }
        }

        //chama requisição
        alert('Atividades selectionadas: \n\n' + activitiesArray);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Baseado em seus resultados, aqui
            estão algumas atividades que você poderá realizar para
            melhorar o funcionamento de cada lobo.</Text>
            <Text style={styles.title}>Selecione algumas:</Text>
            <ScrollView style={styles.questionsContainer}>
                <View style={styles.tags}>
                    {randomActivities.map((data, i) => (
                        <TouchableOpacity key={data.activity} onPress={() => toggleSelectedActivity(data, i)}>
                            <Text style={selectedActivity[i] ? styles.selectedTag : styles.tagsText}>{data.activity}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.activitiesCountContainer}>
                <Text style={styles.activitiesCount}>{activitiesCount} atividades selecionadas</Text>
            </View>
            <View style={{ height: '16%' }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => selectedActivities()}>
                        <Text style={styles.buttonText}>Próxima página</Text>
                        <Icon name="chevron-right" color='#fff' size={45} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        padding: '5%'
    },
    questionsContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
    },
    tags: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagsText: {
        color: '#fff',
        fontSize: width * 0.05,
        fontWeight: '600',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        marginLeft: width * 0.05,
        padding: width * 0.03,
        textAlign: 'center'
    },
    selectedTag: {
        color: '#000',
        fontSize: width * 0.05,
        fontWeight: '600',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#606060',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        marginLeft: width * 0.05,
        padding: width * 0.03,
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: "center",
        bottom: 10,
    },
    activitiesCountContainer: {
        alignSelf: 'center',
        top: '2%'
    },
    activitiesCount: {
        color: '#fff',
        fontSize: 15
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: "flex-end",
        bottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#212121',
        borderRadius: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        marginRight: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 5
    }
});

export default sugestedActivities;
