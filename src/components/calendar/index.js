import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Agenda } from 'react-native-calendars';
import { dataAtual } from '../../pages/calendarSetup/generateDays';
import { useSelector } from 'react-redux';

const testIDs = require('./testIds');

import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Quar.', 'Qui.', 'Sex.', 'Sáb.'],
    today: 'Hoje\'hui'
};
LocaleConfig.defaultLocale = 'br';


const Calendar = () => {
    const calendar = useSelector(state => state.calendar);

    const calendarArray = []
    calendar.forEach((elem) => {
        calendarArray.push(elem.activities)
    })

    const dataInicial = dataAtual()


    useEffect(() => {
        setItems(calendarArray[0])
    }, [calendarArray])

    const [items, setItems] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    const [activitiesDates, setActivitiesDates] = useState('2020-07-27');

    const loadItems = () => {
        setTimeout(() => {
            setItems(items)
        }, 1000);
    }

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Agenda
                //testID={testIDs.agenda.CONTAINER}
                //items={items}
                loadItemsForMonth={loadItems}
                selected={dataInicial}
                renderItem={renderItem}
                renderKnob={() => {
                    return (<Icon name="expand-more" color='#000' size={30} />
                    );
                }}
                items={items}
                pastScrollRange={1}
                futureScrollRange={24}
                renderEmptyDate={renderEmptyDate}
                renderEmptyData={renderEmptyData}
                rowHasChanged={rowHasChanged}
                onRefresh={() => console.log('refreshing...')}
            //markingType={'period'}
            /*markedDates={{
                '2017-05-08': { textColor: '#43515c' },
                '2017-05-09': { textColor: '#43515c' },
                '2017-05-14': { startingDay: true, endingDay: true, color: 'blue' },
                '2017-05-21': { startingDay: true, color: 'blue' },
                '2017-05-22': { endingDay: true, color: 'gray' },
                '2017-05-24': { startingDay: true, color: 'gray' },
                '2017-05-25': { color: 'gray' },
                '2020-05-16': { startingDay: true, endingDay: true, color: 'blue' }
            }}
            monthFormat={'yyyy'}
            theme={{ calendarBackground: '#fff', agendaKnobColor: '#000' }}
            renderKnob={() => {
                return (<Icon name="expand-more" color='#000' size={30} />
                );
            }}
            renderDay={(day, item) => (<Text>{day ? day.day : 'item'}</Text>)}
            hideExtraDays={false}
            */
            />
        </>
    );
}

const renderItem = (item) => {
    return (
        <View
            testID={testIDs.agenda.ITEM}
            style={styles.item}>
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <View style={styles.itemTime}>
                    <Text style={styles.itemTimeText}>{item.time}</Text>
                </View>
                {/*onPress={() => {
                item.setModalVisible(true);
            }} */}
            </View>
            <View>
                <Text style={styles.completedText}>Atividade completada?</Text>
                <View style={styles.completedIconsContainer}>
                    <TouchableOpacity style={styles.completedIconsChecked}>
                        <Icon name="check-circle" color='green' size={35} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="cancel" color='red' size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const renderEmptyDate = () => {
    return (
        <View style={styles.emptyDate}>
            <Text>Esta é uma data vazia!</Text>
        </View>
    );
}

const renderEmptyData = () => {
    return (
        <View style={styles.emptyData}>
            <Text style={styles.emptyDataText}>Nenhuma atividade nesse dia!</Text>
        </View>
    );
}

const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
}

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff', // #d2ffa6 #ffccc9
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        flexDirection: 'column',
        borderWidth: 1,
        borderTopColor: 'lightgrey',
        borderBottomColor: 'lightgrey',
        borderLeftColor: 'lightgrey',
        borderRightColor: 'lightgrey',
        height: 150
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    itemTime: {
        borderWidth: 1,
        borderTopColor: '#000',
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderRightColor: '#000',
        borderRadius: 5,
        marginTop: 9,
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        width: '40%',
        alignSelf: 'center'
    },
    itemTimeText: {
        alignSelf: 'center',
    },
    completedText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    completedIconsContainer: {
        flexDirection: 'row',
        marginTop: 3,
        alignSelf: 'center'
    },
    completedIconsChecked: {
        marginRight: 50
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    emptyData: {
        alignSelf: 'center',
        marginTop: '50%'
    },
    emptyDataText: {
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 300,
        height: 200
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

});

export default Calendar;