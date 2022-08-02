import React, {useState, useEffect} from 'react';
import {Keyboard, View, Platform} from 'react-native';

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

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e?.endCoordinates?.height || 0);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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

      {Platform.OS === 'ios' && <View style={{height: keyboardHeight}} />}
    </SafeAreaView>
  );
};

export default ActiveTasksScreen;
