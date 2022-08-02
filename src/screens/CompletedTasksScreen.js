import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckBox} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, CommonStyles} from '../constants';
import {TASK_ACTIONS} from '../redux';

const ActiveTasksScreen = () => {
  const tasks = useSelector(state => state?.task?.completedTasks);
  const dispatch = useDispatch();
  const {removeCompletedTask, uncompleteTask} = TASK_ACTIONS;

  const Task = ({data}) => {
    return (
      <View
        style={StyleSheet.flatten([
          CommonStyles.flexRow,
          CommonStyles.alignItemCenter,
          CommonStyles.justifyContentBetween,
          {
            backgroundColor: 'white',
            padding: 6,
            marginHorizontal: 16,
            marginVertical: 6,
            borderRadius: 10,
          },
        ])}>
        <CheckBox
          checked={true}
          checkedColor={Colors.primary}
          onPress={() => {
            dispatch({type: uncompleteTask, payload: data});
          }}
        />

        <Text>{data?.text}</Text>

        <Icon
          size={24}
          name="trash-outline"
          onPress={() => {
            dispatch({type: removeCompletedTask, payload: data});
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={CommonStyles.flexRoot}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task data={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ActiveTasksScreen;
