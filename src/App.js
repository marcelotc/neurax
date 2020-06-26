import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import cerebroSvg from './components/cerebro/cerebroSvg';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="cerebroSvg" component={cerebroSvg} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;