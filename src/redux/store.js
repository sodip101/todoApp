import {combineReducers, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; //link and rebuild after installing
import {persistStore, persistReducer} from 'redux-persist';
import {TaskReducer} from './task';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist:[] persist only specific state items
};

const reducer = combineReducers({
  task: TaskReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
