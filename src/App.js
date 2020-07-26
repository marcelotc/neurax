import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import PageOne from './pages/tutorial/pageOne';
import PageTwo from './pages/tutorial/pageTwo';
import Resultado from './pages/resultado/resultado';
import PageThree from './pages/tutorial/pageThree';
import Perguntas from './pages/questionario/perguntas';
import SugestedActivities from './pages/sugestedActivities';
import CalendarSetup from './pages/calendarSetup';
import CerebroSvg from './components/cerebro/cerebroSvg';

const Stack = createStackNavigator();

const App = () => {
    /* useEffect(() => {
         BackHandler.addEventListener('hardwareBackPress', () => { return true });
     }, [])*/
    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                        }}
                        initialRouteName="Main">
                        <Stack.Screen name="Main" component={Main} />
                        <Stack.Screen name="cerebroSvg" component={CerebroSvg} />
                        <Stack.Screen name="login" component={Login} />
                        <Stack.Screen name="cadastro" component={Cadastro} />
                        <Stack.Screen name="pageOne" component={PageOne} />
                        <Stack.Screen name="pageTwo" component={PageTwo} />
                        <Stack.Screen name="pageThree" component={PageThree} />
                        <Stack.Screen name="perguntas" component={Perguntas} />
                        <Stack.Screen name="resultado" component={Resultado} />
                        <Stack.Screen name="sugestedActivities" component={SugestedActivities} />
                        <Stack.Screen name="calendarSetup" component={CalendarSetup} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
}

export default App;