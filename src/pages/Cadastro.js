import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cadastro = (props) => {
    const { goBack } = props.navigation;

    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Icon name='chevron-left' color='#fff' size={50} onPress={() => goBack()}></Icon>
                </View>
                <Text style={styles.title}>Criar conta</Text>
                <View
                    style={{ flex: 1, paddingRight: 10 }}>
                </View>
            </View>
            <View style={styles.form}>
                <Formik
                    initialValues={{ user: '', email: '', password: '', confirmPassword: '' }}
                    onSubmit={(values, actions) => {
                        alert(JSON.stringify(values))
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {formikProps => (
                        <>
                            <Text style={styles.inputText}>Usuário</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={formikProps.handleChange('user')}
                                returnKeyType="next"
                                autoCapitalize='none'
                                onSubmitEditing={() => secondInput.current.focus()} />
                            <Text style={styles.inputText}>Email</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={formikProps.handleChange('email')}
                                returnKeyType="next"
                                autoCapitalize='none'
                                onSubmitEditing={() => thirdInput.current.focus()}
                                ref={secondInput}
                            />
                            <Text style={styles.inputText}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={formikProps.handleChange('password')}
                                returnKeyType="next"
                                autoCapitalize='none'
                                onSubmitEditing={() => fourthInput.current.focus()}
                                ref={thirdInput}
                            />
                            <Text style={styles.inputText}>Confirmar senha</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={formikProps.handleChange('confirmPassword')}
                                autoCapitalize='none'
                                ref={fourthInput} />
                            {formikProps.isSubmitting ? (
                                <ActivityIndicator style={{ marginBottom: 63 }} />
                            ) : <TouchableOpacity style={styles.button} title="Submit" onPress={formikProps.handleSubmit}><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
                            }
                        </>
                    )}
                </Formik>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    title: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5
    },
    form: {
        width: '80%'
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#212121',
        color: '#fff',
        borderRadius: 9,
        padding: 20,
        marginBottom: 15
    },
    inputText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        borderWidth: 1,
        borderColor: '#212121',
        backgroundColor: '#fff',
        borderRadius: 9,
        padding: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center'
    },
})

export default Cadastro;
