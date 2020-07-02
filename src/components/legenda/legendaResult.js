import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LegendaResult = () => {
    return (
        <View style={styles.container}>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'lightblue' }}></View>
                <Text style={styles.text}>Excelente</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: '#59ff00' }}></View>
                <Text style={styles.text}>Bom</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'yellow' }}></View>
                <Text style={styles.text}>Médio</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'red' }}></View>
                <Text style={styles.text}>Ruim</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: WIDTH / 5,
        paddingBottom: HEIGHT / 20,
        bottom: 50
    },
    text: {
        color: '#fff',
        fontSize: 18,

    },
    legendaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        marginBottom: 55
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 15,
        borderRadius: 50,
    },
    iconNumber: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    }
})

export default LegendaResult;
