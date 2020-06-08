import React, { useEffect } from 'react';
import {
  View,
  Text,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <View>
        <Text>Neurax</Text>
      </View>
    </>
  );
};

export default App;
