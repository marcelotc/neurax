import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GetDates } from './generateDays';
import { activitiesCalendarArray } from '../../redux/actions/calendar';
import { useSelector, useDispatch } from 'react-redux';

const calendarSetup = (props) => {
    const dispatch = useDispatch();
    const { navigate } = props.navigation

    const choosedActivities = useSelector(state => { return state.choosedActivities })
    const choosedActivitiesArray = []
    choosedActivities.forEach((elem) => {
        elem.activities.map((activity) => {
            choosedActivitiesArray.push(activity)
        })
    })

    //const mockedSelectedActivities = ["Praticar esportes", "Ler um livro", "Tocar um instrumento"]

    const [week, setWeek] = useState(Array(choosedActivitiesArray.length).fill('monday'));
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

        var aryDates = GetDates(30);

        const getDay = date => {
            var startDate = new Date(date);
            var day = 60 * 60 * 24 * 1000;
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var isoDate = new Date(startDate.getTime() + day)
            var dayName = days[isoDate.getDay()].toLowerCase();

            return dayName

        }

        aryDates.sort((a, b) => a.localeCompare(b));

        //const activities = ["Study", "Go to the gym"]
        //const times = ["11:30 - 12:30", "18:30 - 19:00"]
        //const weeks = ["monday", "wednesday"];

        var t1 = timeOneFormated
        var t2 = timeTwoFormated
        var times = t1.map((_, i) => `${t1[i]} - ${t2[i]}`);

        const weeksMap = week.reduce((m, week, i) => {
            if (!m.has(week)) {
                m.set(week, []);
            };
            m.get(week).push({
                name: choosedActivitiesArray[i],
                time: times[i],
                week
            });
            return m;
        }, new Map());

        const res = Object.fromEntries(
            aryDates.map(date => [date, (weeksMap.get(getDay(date)) || []).map(obj => ({
                ...obj
            }))]));

        console.log(res);
        dispatch(activitiesCalendarArray(res))
        navigate('Main')

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
                                    <Picker.Item label="Segunda-feira" value="monday" />
                                    <Picker.Item label="Terça-feira" value="tuesday" />
                                    <Picker.Item label="Quarta-feira" value="wednesday" />
                                    <Picker.Item label="Quinta-feira" value="thursday" />
                                    <Picker.Item label="Sexta-feira" value="friday" />
                                    <Picker.Item label="Sábado" value="saturday" />
                                    <Picker.Item label="Domingo" value="sunday" />
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
