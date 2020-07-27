import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';

const calendarSetup = () => {
    const choosedActivities = useSelector(state => { return state.choosedActivities })
    const choosedActivitiesArray = []
    choosedActivities.forEach((elem) => {
        choosedActivitiesArray.push(elem.activities)
    })

    const mockedSelectedActivities = ["Praticar esportes", "Ler um livro", "Tocar um instrumento"]

    const [week, setWeek] = useState(Array(mockedSelectedActivities.length).fill(''));
    const [mode, setMode] = useState('date');
    const [showOne, setShowOne] = useState(Array(mockedSelectedActivities.length).fill(false));
    const [showTwo, setShowTwo] = useState(Array(mockedSelectedActivities.length).fill(false));
    const [timeOne, setTimeOne] = useState(Array(mockedSelectedActivities.length).fill(new Date()));
    const [timeTwo, setTimeTwo] = useState(Array(mockedSelectedActivities.length).fill(new Date()));
    const [timeOneFormated, setTimeOneFormated] = useState(Array(mockedSelectedActivities.length).fill(''));
    const [timeTwoFormated, setTimeTwoFormated] = useState(Array(mockedSelectedActivities.length).fill(''));

    /*console.log('weeks', week)
    console.log('timeOneFormated', timeOneFormated)
    console.log('timeTwoFormated', timeTwoFormated)*/

    const handleChangePicker = (itemValue, i) => {
        week.splice(i, 1, itemValue)
        setWeek([...week])
    }

    const onChangeOne = (event, date, i) => {
        showOne.splice(i, 1, false)
        setShowOne([...showOne]);

        timeOne.splice(i, 1, date)
        setTimeOne([...timeOne])

        let isoDate = date.toString();
        let result = isoDate.match(/\d\d:\d\d/);
        timeOneFormated.splice(i, 1, result[0])
        setTimeOneFormated([...timeOneFormated])
    };

    const onChangeTwo = (event, date, i) => {
        showTwo.splice(i, 1, false)
        setShowTwo([...showTwo]);

        timeTwo.splice(i, 1, date)
        setTimeTwo([...timeTwo])

        let isoDate = date.toString();
        let result = isoDate.match(/\d\d:\d\d/);
        timeTwoFormated.splice(i, 1, result[0])
        setTimeTwoFormated([...timeTwoFormated])
    };

    const showTimepickerOne = (i) => {
        showOne.splice(i, 1, true)
        setShowOne([...showOne]);
        setMode('time');
    };

    const showTimepickerTwo = (i) => {
        showTwo.splice(i, 1, true)
        setShowTwo([...showTwo]);
        setMode('time');
    };

    const confirmButton = () => {
        console.log('=======================================================')
        console.log(mockedSelectedActivities)
        console.log(week)
        console.log(timeOneFormated)
        console.log(timeTwoFormated)
        console.log('=======================================================')
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollviewContainer}>
                <Text style={styles.title}>Escolha que dia da semana e
            horário que você deseja fazer suas atividades:</Text>
                {mockedSelectedActivities.map((data, i) => (
                    <>
                        <View style={styles.activitiesContainer}>
                            <Text style={styles.activity}>{data}</Text>
                            <View
                                style={styles.selectPicker}>
                                <Picker
                                    key={String(i)}
                                    selectedValue={week[i]}
                                    style={{ color: '#fff', marginLeft: '35%' }}
                                    mode={'dropdown'}
                                    itemStyle={styles.itemStyle}
                                    onValueChange={(itemValue) => handleChangePicker(itemValue, i)} >
                                    <Picker.Item label="Segunda-feira" value="segunda" />
                                    <Picker.Item label="Terça-feira" value="terca" />
                                    <Picker.Item label="Quarta-feira" value="quarta" />
                                    <Picker.Item label="Quinta-feira" value="quinta" />
                                    <Picker.Item label="Sexta-feira" value="sexta" />
                                    <Picker.Item label="Sábado" value="sabado" />
                                    <Picker.Item label="Domingo" value="domingo" />
                                </Picker>
                            </View>
                            <View style={styles.timesContainer}>
                                <TouchableOpacity
                                    style={styles.timeButton}
                                    onPress={() => showTimepickerOne(i)}>
                                    <Text style={styles.timeText}>{timeOneFormated[i]}</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 20,
                                    marginLeft: 15,
                                    marginRight: 15,
                                }}>às</Text>
                                <TouchableOpacity
                                    style={styles.timeButton}
                                    onPress={() => showTimepickerTwo(i)}>
                                    <Text style={styles.timeText}>{timeTwoFormated[i]}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            {showOne[i] && (
                                <DateTimePicker
                                    key={String(i)}
                                    value={timeOne[i]}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event, date) => onChangeOne(event, date, i)}
                                />
                            )}
                            {showTwo[i] && (
                                <DateTimePicker
                                    key={String(i)}
                                    value={timeTwo[i]}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={(event, date) => onChangeTwo(event, date, i)}
                                />
                            )}
                        </View>
                    </>
                ))}
            </ScrollView>
            <View style={styles.confirmContainer}>
                <TouchableOpacity onPress={() => confirmButton()}>
                    <Text style={styles.confirmButton}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    scrollviewContainer: {
        flex: 1,
        backgroundColor: '#000',
        marginBottom: '10%',
        borderColor: '#404042',
        borderBottomWidth: 1,
        borderRadius: 9,
    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        marginLeft: '10%',
    },
    confirmContainer: {
        backgroundColor: '#212121',
        alignSelf: 'center',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    confirmButton: {
        color: '#fff',
        fontSize: 30,
    },
    activity: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    activitiesContainer: {
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        marginTop: 50
    },
    selectPicker: {
        width: 300,
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        alignSelf: 'center',
        marginBottom: 20
    },
    timesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    timeButton: {
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        width: '30%',
        marginBottom: 20,
    },
    timeText: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        padding: 5
    }
})

export default calendarSetup;
