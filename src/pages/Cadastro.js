import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Cadastro = (props) => {
    const { goBack } = props.navigation;

    return (
        <View>
            <Icon name='chevron-left' size={50} onPress={() => goBack()}></Icon>
            <Text>Cadastro</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Cadastro;
