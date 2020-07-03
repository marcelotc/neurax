import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import activitiesObject from './activitiesObject';
import ButtonNext from '../../components/buttons/ButtonNext';

const sugestedActivities = (props) => {
    const { navigate } = props.navigation;

    const [selectedActivity, setSelectedActivity] = useState(Array(activitiesObject.length).fill(false)) //Array.from({ length: activitiesObject.length }, _ => false)

    const toggleSelectedActivity = (index) => {
        setSelectedActivity(selectedActivity.map((bool, i) => i == index ? !bool : bool))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Baseado em seus resultados, aqui
            estão algumas atividades que você poderá realizar para
            melhorar o funcionamento de cada lobo.</Text>
            <Text style={styles.title}>Selecione algumas:</Text>
            <ScrollView style={styles.questionsContainer}>
                <View style={styles.tags}>
                    {activitiesObject.map((data, i) => (
                        <TouchableOpacity key={data.activity} onPress={() => toggleSelectedActivity(i)}>
                            <Text style={selectedActivity[i] ? styles.selectedTag : styles.tagsText}>{data.activity}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={{ height: '12%' }}>
                <ButtonNext navigate={navigate} page={'Main'}></ButtonNext>
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
        marginLeft: 20,
        marginRight: 20,
        padding: 5
    },
    tags: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagsText: {
        color: '#fff',
        fontSize: 20,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#fff',
        padding: 10,
        marginLeft: 15,
        marginRight: 10,
        marginTop: 20,
        textAlign: 'center'
    },
    selectedTag: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#606060',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: "center",
        bottom: 10,
    },
});

export default sugestedActivities;
