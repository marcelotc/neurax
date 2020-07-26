import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const calendarSetup = () => {
    const [language, setLanguage] = useState();

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [timeOne, setTimeOne] = useState('');

    const onChange = (event, selectedDate) => {
        setShow(false);
        let isoDate = selectedDate.toString();
        let result = isoDate.match(/\d\d:\d\d/);
        setTimeOne(result[0])
    };

    const showTimepicker = () => {
        setShow(true);
        setMode('time');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha que dia da semana e
            horário que você deseja fazer suas atividades:</Text>

            <View style={styles.activitiesContainer}>
                <Text style={styles.activity}>Estudar um língua estrangeira</Text>
                <View
                    style={styles.selectPicker}>
                    <Picker
                        selectedValue={language}
                        style={{ color: '#fff', marginLeft: '35%' }}
                        mode={'dropdown'}
                        itemStyle={styles.itemStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            setLanguage(itemValue)
                        }>
                        <Picker.Item label="Quinta-feira" value="quinta" />
                        <Picker.Item label="Sexta-feira" value="sexta" />
                    </Picker>
                </View>
                <View style={styles.timesContainer}>
                    <TouchableOpacity
                        style={styles.timeButton}
                        onPress={showTimepicker}>
                        <Text style={styles.timeText}>{timeOne}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        marginLeft: 15,
                        marginRight: 15,
                    }}>ás</Text>
                    <TouchableOpacity
                        style={styles.timeButton}
                        onPress={showTimepicker}>
                        <Text style={styles.timeText}>20:80</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>

                {show && (
                    <DateTimePicker
                        value={new Date()}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
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
