import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import cerebroSvg from './pages/cerebroSvg';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;