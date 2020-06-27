import React from 'react';
import { TextInput, Button, ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
    const { navigate } = props.navigation

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Neurax</Text>
            <Image style={styles.brainImg} source={require('../assets/brain.png')}></Image>

            <View style={styles.form}>
                <Formik
                    initialValues={{ user: '', password: '' }}
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
                            <TextInput style={styles.input} onChangeText={formikProps.handleChange('user')} />
                            <Text style={styles.inputText}>Senha</Text>
                            <TextInput style={styles.input} onChangeText={formikProps.handleChange('password')} />
                            {formikProps.isSubmitting ? (
                                <ActivityIndicator style={{ marginBottom: 63 }} />
                            ) : <TouchableOpacity style={styles.button} title="Submit" onPress={formikProps.handleSubmit}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
                            }
                        </>
                    )}
                </Formik>

                <View>
                    <Text style={styles.cadastroRedirectText}>Novo usuário? <Text onPress={() => navigate('cadastro')} style={{ fontWeight: 'bold' }}> Cadastre-se</Text></Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        height: '100%'
    },
    title: {
        fontSize: 90,
        color: '#fff'
    },
    brainImg: {
        height: 160,
        width: 210,
        marginTop: 20
    },
    form: {
        width: '80%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#212121',
        backgroundColor: '#212121',
        color: '#fff',
        borderRadius: 9,
        padding: 20,
        marginBottom: 30
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
        marginBottom: 30,
    },
    buttonText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center'
    },
    cadastroRedirectText: {
        color: '#fff',
        fontSize: 20
    }
})

export default Login;
