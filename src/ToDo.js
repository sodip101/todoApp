import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {BottomTabNav} from './routes';

const ToDo = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ToDo;
