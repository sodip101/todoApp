import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, CommonStyles} from '../constants';

const NewTaskInput = ({defaultValue, handleTextChange, handleAddNewTask}) => {
  return (
    <View
      style={StyleSheet.flatten([
        CommonStyles.flexRow,
        CommonStyles.alignItemCenter,
        {
          backgroundColor: 'white',
          paddingVertical: 6,
          paddingHorizontal: 10,
          marginHorizontal: 16,
          borderRadius: 12,
          marginVertical: 10,
        },
      ])}>
      <TextInput
        placeholder="Add new task"
        style={StyleSheet.flatten({
          fontSize: 16,
          width: '90%',
        })}
        defaultValue={defaultValue}
        onChangeText={handleTextChange}
        onSubmitEditing={handleAddNewTask}
      />

      <Icon
        name="add-circle"
        color={Colors.primary}
        size={40}
        onPress={handleAddNewTask}
      />
    </View>
  );
};

export default NewTaskInput;
