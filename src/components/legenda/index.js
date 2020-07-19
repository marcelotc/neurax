import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Legenda = () => {
    return (
        <View style={styles.container}>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: '#59ff00' }}><Text style={styles.iconNumber}>1</Text></View>
                <Text style={styles.text}>Lobo frontal</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'yellow' }}><Text style={styles.iconNumber}>2</Text></View>
                <Text style={styles.text}>Lobo parietal</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'lightblue' }}><Text style={styles.iconNumber}>3</Text></View>
                <Text style={styles.text}>Lobo temporal</Text>
            </View>
            <View style={styles.legendaContainer}>
                <View style={{ ...styles.icon, backgroundColor: 'red' }}><Text style={styles.iconNumber}>4</Text></View>
                <Text style={styles.text}>Lobo occipital</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: WIDTH / 20,
        paddingBottom: HEIGHT / 20,
        top: '58%'
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
        height: HEIGHT * 0.045,
        width: HEIGHT * 0.045,
        marginRight: 15,
        borderRadius: 50,
    },
    iconNumber: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    }
})

export default Legenda;