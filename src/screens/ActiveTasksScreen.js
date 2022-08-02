import React from 'react';
import {View, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {CommonStyles} from '../constants';

const ActiveTasksScreen = () => {
  return (
    <SafeAreaView style={CommonStyles.flexRoot}>
      <Text>ActiveTasksScreen</Text>
    </SafeAreaView>
  );
};

export default ActiveTasksScreen;
