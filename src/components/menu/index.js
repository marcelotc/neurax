import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const HEIGHT = Dimensions.get('window').height;

const Menu = (props) => {
    const { navigate } = props.navigation
    return (
        <View style={styles.menu}>
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Marcelo</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.items, styles.itemSelected]}>
                    <Text style={styles.text}>Calendário</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text}>Progresso</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text} onPress={() => navigate('login')}>Configurações</Text>
                </View>
                <View style={styles.noSelectedItems}>
                    <Text style={styles.text} onPress={() => navigate('perguntas')}>Sair</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#000"
    },
    headerContainer: {
        flexDirection: 'row',
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        marginTop: 100,
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: '#fff'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    },
})

export default Menu;