import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {CheckBox} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, CommonStyles} from '../constants';

const CompletedTask = ({
  data,
  handleUncompleteTask,
  handleRemoveCompletedTask,
}) => {
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
        onPress={() => handleUncompleteTask(data)}
      />

      <Text>{data?.text}</Text>

      <Icon
        size={24}
        name="trash-outline"
        onPress={() => handleRemoveCompletedTask(data)}
      />
    </View>
  );
};

export default CompletedTask;
