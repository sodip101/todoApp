import React from 'react';
import {FlatList} from 'react-native';

import CompletedTask from './CompletedTask';

const CompletedTasks = ({
  tasks,
  handleRemoveCompletedTask,
  handleUncompleteTask,
}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <CompletedTask
          data={item}
          handleRemoveCompletedTask={handleRemoveCompletedTask}
          handleUncompleteTask={handleUncompleteTask}
        />
      )}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CompletedTasks;
