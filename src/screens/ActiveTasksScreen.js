import React, {useState} from 'react';
import {View, TextInput, FlatList, StyleSheet, Keyboard} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckBox} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, CommonStyles} from '../constants';
import {TASK_ACTIONS} from '../redux';

const ActiveTasksScreen = () => {
  const tasks = useSelector(state => state?.task?.activeTasks);
  const dispatch = useDispatch();
  const {addTask, removeActiveTask, completeTask, updateTask} = TASK_ACTIONS;

  const [newTask, setNewTask] = useState({});

  const Task = ({data}) => {
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
        <CheckBox
          checked={false}
          onPress={() => {
            dispatch({type: completeTask, payload: data});
          }}
        />

        <TextInput
          value={updatedTask?.text}
          onChangeText={text =>
            setUpdatedTask({text, dateAdded: updatedTask?.dateAdded})
          }
          style={{width: '70%'}}
          onSubmitEditing={() => {
            dispatch({type: updateTask, payload: updatedTask});
          }}
        />

        <Icon
          size={24}
          color={Colors.primary}
          name="trash-outline"
          onPress={() => {
            dispatch({type: removeActiveTask, payload: data});
          }}
        />
      </View>
    );
  };

  const addAnewTask = () => {
    if (newTask?.text) {
      Keyboard.dismiss();
      dispatch({type: addTask, payload: newTask});
      setNewTask({});
    }
  };

  return (
    <SafeAreaView style={CommonStyles.flexRoot}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task data={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 16}}
      />

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
            marginBottom: 16,
          },
        ])}>
        <TextInput
          placeholder="Add new task"
          style={{
            fontSize: 16,
            width: '90%',
          }}
          defaultValue={newTask?.text}
          onChangeText={text => setNewTask({text, dateAdded: Date.now()})}
          onSubmitEditing={addAnewTask}
        />

        <Icon
          name="add-circle"
          color={Colors.primary}
          size={40}
          onPress={addAnewTask}
        />
      </View>
    </SafeAreaView>
  );
};

export default ActiveTasksScreen;
