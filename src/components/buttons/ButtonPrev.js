import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ButtonPrev = (props) => {
    const { goBack } = props;

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => goBack()}>
                <Icon name="chevron-left" color='#fff' size={45} />
                <Text style={styles.buttonText}>Página anterior</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignSelf: "flex-start",
        bottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#212121',
        borderRadius: 10,
        paddingRight: 10,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        marginLeft: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 5
    }
})

export default ButtonPrev;