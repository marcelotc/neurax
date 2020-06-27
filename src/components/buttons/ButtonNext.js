import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ButtonNext = (props) => {
    const { navigate, page } = props;

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigate(page)}>
                <Text style={styles.buttonText}>Próxima página</Text>
                <Icon name="chevron-right" color='#fff' size={50} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        alignSelf: "flex-end",
        bottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#212121',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 5
    }
})

export default ButtonNext;