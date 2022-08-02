import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {CheckBox} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, CommonStyles} from '../constants';

const ActiveTask = ({
  data,
  handleCompleteTask,
  handleUpdateTask,
  handleRemoveTask,
}) => {
  const [updatedTask, setUpdatedTask] = useState(data);

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
      <CheckBox checked={false} onPress={() => handleCompleteTask(data)} />

      <TextInput
        value={updatedTask?.text}
        onChangeText={text =>
          setUpdatedTask({text, dateAdded: updatedTask?.dateAdded})
        }
        style={StyleSheet.flatten({width: '70%'})}
        onSubmitEditing={() => handleUpdateTask(updatedTask)}
      />

      <Icon
        size={24}
        color={Colors.primary}
        name="trash-outline"
        onPress={() => handleRemoveTask(data)}
      />
    </View>
  );
};

export default ActiveTask;
