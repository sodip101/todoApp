import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ActiveTask from './ActiveTask';

const ActiveTasks = ({
  tasks,
  handleCompleteTask,
  handleRemoveTask,
  handleUpdateTask,
}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <ActiveTask
          data={item}
          handleCompleteTask={handleCompleteTask}
          handleRemoveTask={handleRemoveTask}
          handleUpdateTask={handleUpdateTask}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={StyleSheet.flatten({paddingVertical: 16})}
    />
  );
};

export default ActiveTasks;
