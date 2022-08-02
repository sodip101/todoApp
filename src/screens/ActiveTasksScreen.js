import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {CommonStyles} from '../constants';
import {TASK_ACTIONS} from '../redux';
import {ActiveTasks, NewTaskInput} from '../components';

const ActiveTasksScreen = () => {
  const tasks = useSelector(state => state?.task?.activeTasks);
  const dispatch = useDispatch();
  const {addTask, removeActiveTask, completeTask, updateTask} = TASK_ACTIONS;

  const [newTask, setNewTask] = useState({});

  const handleCompleteTask = data => {
    dispatch({type: completeTask, payload: data});
  };

  const handleUpdateTask = data => {
    dispatch({type: updateTask, payload: data});
  };

  const handleRemoveTask = data => {
    dispatch({type: removeActiveTask, payload: data});
  };

  const handleTextChange = text => setNewTask({text, dateAdded: Date.now()});

  const addAnewTask = () => {
    if (newTask?.text) {
      Keyboard.dismiss();
      dispatch({type: addTask, payload: newTask});
      setNewTask({});
    }
  };

  return (
    <SafeAreaView style={CommonStyles.flexRoot}>
      <ActiveTasks
        tasks={tasks}
        handleCompleteTask={handleCompleteTask}
        handleRemoveTask={handleRemoveTask}
        handleUpdateTask={handleUpdateTask}
      />

      <NewTaskInput
        defaultValue={newTask.text}
        handleAddNewTask={addAnewTask}
        handleTextChange={handleTextChange}
      />
    </SafeAreaView>
  );
};

export default ActiveTasksScreen;
