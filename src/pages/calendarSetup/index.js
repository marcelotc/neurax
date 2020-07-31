import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GetDates } from './generateDays';
import { useSelector } from 'react-redux';

const calendarSetup = () => {
    const choosedActivities = useSelector(state => { return state.choosedActivities })
    const choosedActivitiesArray = []
    choosedActivities.forEach((elem) => {
        elem.activities.map((activity) => {
            choosedActivitiesArray.push(activity)
        })
    })

    //const mockedSelectedActivities = ["Praticar esportes", "Ler um livro", "Tocar um instrumento"]

    const [week, setWeek] = useState(Array(choosedActivitiesArray.length).fill(''));
    const [mode, setMode] = useState('date');
    const [showOne, setShowOne] = useState(Array(choosedActivitiesArray.length).fill(false));
    const [showTwo, setShowTwo] = useState(Array(choosedActivitiesArray.length).fill(false));
    const [timeOne, setTimeOne] = useState(Array(choosedActivitiesArray.length).fill(new Date()));
    const [timeTwo, setTimeTwo] = useState(Array(choosedActivitiesArray.length).fill(new Date()));
    const [timeOneFormated, setTimeOneFormated] = useState(Array(choosedActivitiesArray.length).fill(''));
    const [timeTwoFormated, setTimeTwoFormated] = useState(Array(choosedActivitiesArray.length).fill(''));

    const handleChangePicker = (itemValue, i) => {
        week.splice(i, 1, itemValue)
        setWeek([...week])
    }

    const onChangeOne = (event, date, i) => {
        if (date != undefined) {
            showOne.splice(i, 1, false)
            setShowOne([...showOne]);

            timeOne.splice(i, 1, date)
            setTimeOne([...timeOne])

            let isoDate = date.toString();
            let result = isoDate.match(/\d\d:\d\d/);
            timeOneFormated.splice(i, 1, result[0])
            setTimeOneFormated([...timeOneFormated])
        }
    };

    const onChangeTwo = (event, date, i) => {
        if (date != undefined) {
            showTwo.splice(i, 1, false)
            setShowTwo([...showTwo]);

            timeTwo.splice(i, 1, date)
            setTimeTwo([...timeTwo])

            let isoDate = date.toString();
            let result = isoDate.match(/\d\d:\d\d/);
            timeTwoFormated.splice(i, 1, result[0])
            setTimeTwoFormated([...timeTwoFormated])
        }
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

        var aryDates = GetDates(2);
        console.log(aryDates);

        var activities = [];
        var loop = [];

        var ativi = ["Esporte", "teste", "tenis"]
        var horas = ["18:00 - 44:00", "19:00 - 23:00", "20:00 - 21:00"]
        var weekArray = ["segunda", "quarta", "sabado"]

        for (var i = 0; i < ativi.length; i++) {
            activities.push([ativi[i], horas[i]]);
        }

        for (var i = 0; i < activities.length; i++) {
            loop.push({ name: activities[i][0], time: activities[i][1], week: '' });
        }

        loop.forEach(function (element, i) {
            element.week = weekArray[i];
        });

        console.log('loop', loop)

        const obj = aryDates.map((dates, index) => {
            return ('"' + dates + '":' + "[{" +
                '"name"' + ":" + '"' + ativi[index] + '"' + "," +
                '"time"' + ":" + '"' + horas[index] + '"' + "," +
                '"week"' + ": " + '"' + weekArray[index] + '"' +
                "}]");
        })

        const jsonObj = `{${obj}}`

        console.log(JSON.parse(jsonObj))

        var t1 = ["18:00", "19:00", "20:00"]
        var t2 = ["44:00", "23:00", "21:00"]
        var t3 = t1.map((_, i) => `${t1[i]} - ${t2[i]}`);
        //["Praticar esportes", "Ler um livro"]
        //["quarta", "terca"]
        //["02:31", "10:31"]
        //["22:31", "23:31"]

        console.log('=======================================================')
        console.log(choosedActivitiesArray)
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
                {choosedActivitiesArray.map((data, i) => (
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
                                    <Text style={styles.timeText}>{timeOneFormated[i] ? timeOneFormated[i] : 'Selecione um horário de início'}</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 20,
                                    marginLeft: 15,
                                    marginRight: 15,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}>às</Text>
                                <TouchableOpacity
                                    style={styles.timeButton}
                                    onPress={() => showTimepickerTwo(i)}>
                                    <Text style={styles.timeText}>{timeTwoFormated[i] ? timeTwoFormated[i] : 'Selecione um horário de término'}</Text>
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
        marginBottom: '5%',
        borderColor: '#404042',
        borderBottomWidth: 1,
        borderRadius: 9,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        marginLeft: '10%',
        marginTop: 10
    },
    confirmContainer: {
        backgroundColor: '#212121',
        alignSelf: 'center',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        marginBottom: '6%',
        width: '82%'
    },
    confirmButton: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 5,
        alignSelf: 'center'
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
        width: '82%',
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        alignSelf: 'center',
        marginBottom: 30,
        backgroundColor: '#212121',
    },
    timesContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    timeButton: {
        borderColor: '#fff',
        backgroundColor: '#212121',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        width: '82%'
    },
    timeText: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
        padding: 15
    }
})

export default calendarSetup;
