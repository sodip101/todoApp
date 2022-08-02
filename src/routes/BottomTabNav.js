import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {ActiveTasksScreen, CompletedTasksScreen} from '../screens';
import {Colors} from '../constants';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, size}) => {
          let iconName;

          if (route.name === 'Completed') {
            iconName = focused
              ? 'checkmark-circle'
              : 'checkmark-circle-outline';
          } else if (route.name === 'Active') {
            iconName = focused ? 'add-circle-outline' : 'add-circle';
          }

          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? Colors.primary : 'gray'}
            />
          );
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      <BottomTab.Screen name="Active" component={ActiveTasksScreen} />

      <BottomTab.Screen name="Completed" component={CompletedTasksScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
