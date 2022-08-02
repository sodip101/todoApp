import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TASK_ACTIONS} from '../redux';
import {CompletedTasks} from '../components';
import {CommonStyles} from '../constants';

const CompletedTasksScreen = () => {
  const tasks = useSelector(state => state?.task?.completedTasks);
  const dispatch = useDispatch();

  const {removeCompletedTask, uncompleteTask} = TASK_ACTIONS;

  const handleUncompleteTask = data => {
    dispatch({type: uncompleteTask, payload: data});
  };

  const handleRemoveCompletedTask = data => {
    dispatch({type: removeCompletedTask, payload: data});
  };

  return (
    <SafeAreaView style={CommonStyles.flexRoot}>
      <CompletedTasks
        tasks={tasks}
        handleRemoveCompletedTask={handleRemoveCompletedTask}
        handleUncompleteTask={handleUncompleteTask}
      />
    </SafeAreaView>
  );
};

export default CompletedTasksScreen;
