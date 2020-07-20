import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import CerebroSvgResultado from '../../components/cerebro/cerebroResultadoSvg';
import ButtonNext from '../../components/buttons/ButtonNext';
import Icon from 'react-native-vector-icons/MaterialIcons'
import activitiesObject from '../../pages/sugestedActivities/activitiesObject';
import { selectedActivitiesArray } from '../../redux/actions/activities'
import { useDispatch, useSelector } from 'react-redux';

const resultado = (props) => {
    const { navigate } = props.navigation;

    const results = useSelector(state => state.resultado);

    if (results.length != 0) {

        const frontalNivel = results.find(l => { return l.lobe === 'frontal' })
        const parietalNivel = results.find(l => { return l.lobe === 'parietal' })
        const occipitalNivel = results.find(l => { return l.lobe === 'occipital' })
        const temporalNivel = results.find(l => { return l.lobe === 'temporal' })

        console.log(frontalNivel.numberOfAcitivities)
        console.log(temporalNivel.numberOfAcitivities)
        console.log(occipitalNivel.numberOfAcitivities)
        console.log(parietalNivel.numberOfAcitivities)

        const frontalActivities = activitiesObject.filter((l) => { return l.lobe === 'frontal' })
        var frontalAct = frontalActivities.sort(() => Math.random() - Math.random()).slice(0, frontalNivel.numberOfAcitivities)

        const temporalActivities = activitiesObject.filter((l) => { return l.lobe === 'temporal' })
        var temporalAct = temporalActivities.sort(() => Math.random() - Math.random()).slice(0, temporalNivel.numberOfAcitivities)

        const occipitalActivities = activitiesObject.filter((l) => { return l.lobe === 'occipital' })
        var occipitalAct = occipitalActivities.sort(() => Math.random() - Math.random()).slice(0, occipitalNivel.numberOfAcitivities)

        const parietalActivities = activitiesObject.filter((l) => { return l.lobe === 'parietal' })
        var parietalAct = parietalActivities.sort(() => Math.random() - Math.random()).slice(0, parietalNivel.numberOfAcitivities)

        console.log('frontalAct', frontalAct)
        console.log('temporalAct', temporalAct)
        console.log('occipitalAct', occipitalAct)
        console.log('parietalAct', parietalAct)

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

        const dispatch = useDispatch();

        randomActivities.forEach((elem) => {
            dispatch(selectedActivitiesArray(elem));
        })
    } else {
        console.log('results array vazio!')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.legendaTitle}>Seu nível de qualidade de cada lobo</Text>
                <CerebroSvgResultado></CerebroSvgResultado>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomItem}>
                    <Text style={styles.legendaTitle}>Legenda</Text>
                    <View style={styles.bottomItemInner}>
                        <View style={styles.legendaContainer}>
                            <View style={{ ...styles.icon, backgroundColor: '#59ff00' }}></View>
                            <Text style={styles.legendaText}>Excelente</Text>
                        </View>
                        <View style={styles.legendaContainer}>
                            <View style={{ ...styles.icon, backgroundColor: 'lightblue' }}></View>
                            <Text style={styles.legendaText}>Bom</Text>
                        </View>
                        <View style={styles.legendaContainer}>
                            <View style={{ ...styles.icon, backgroundColor: 'yellow' }}></View>
                            <Text style={styles.legendaText}>Médio</Text>
                        </View>
                        <View style={styles.legendaContainer}>
                            <View style={{ ...styles.icon, backgroundColor: 'red' }}></View>
                            <Text style={styles.legendaText}>Ruim</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInnerButton}>
                        <TouchableOpacity style={styles.duvidaButton} onPress={() => alert('Dúvida')}>
                            <Text style={styles.duvidaButtonText}>Dúvida</Text>
                            <Icon name='help-outline' color='#fff' size={33}></Icon>
                        </TouchableOpacity>
                        <ButtonNext navigate={navigate} page={'sugestedActivities'}></ButtonNext>
                    </View>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: '65%',
        backgroundColor: '#000'
    },
    bottom: {
        height: '35%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bottomItem: {
        width: '100%',
        height: '50%',
    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    legendaContainer: {
        width: '50%',
        height: '50%',
        flexDirection: 'row',
    },
    legendaTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#000'
    },
    legendaText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: '15%',
        marginTop: '10%',
    },
    bottomItemInnerButton: {
        flex: 1,
        backgroundColor: '#000',
    },
    icon: {
        height: 20,
        width: 20,
        borderRadius: 50,
        marginLeft: '25%',
        marginTop: '10%',
    },
    duvidaButton: {
        position: 'absolute',
        flexDirection: 'row',
        left: '10%',
        bottom: '20%',
    },
    duvidaButtonText: {
        color: '#fff',
        fontSize: 23,
        marginRight: '10%'
    }
})

export default resultado;
