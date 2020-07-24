import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const calendarSetup = () => {
    const [language, setLanguage] = useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Teste</Text>

            <View
                style={{
                    width: 300,
                    marginTop: 15,
                    marginLeft: 20,
                    marginRight: 20,
                    borderColor: '#fff',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderRadius: 10,
                    alignSelf: 'center'
                }}>
                <Picker
                    selectedValue={language}
                    style={{ color: '#fff' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    text: {
        color: '#fff'
    }
})

export default calendarSetup;
