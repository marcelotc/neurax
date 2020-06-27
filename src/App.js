import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PageOne from './pages/tutorial/pageOne';
import PageTwo from './pages/tutorial/pageTwo';
import PageThree from './pages/tutorial/pageThree';
import cerebroSvg from './components/cerebro/cerebroSvg';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
                initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="cerebroSvg" component={cerebroSvg} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="cadastro" component={Cadastro} />
                <Stack.Screen name="pageOne" component={PageOne} />
                <Stack.Screen name="pageTwo" component={PageTwo} />
                <Stack.Screen name="pageThree" component={PageThree} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;