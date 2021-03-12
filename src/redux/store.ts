import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import {rootReducer} from './reducers';

// Configuração da persistência de dados do redux
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

// Cria reducer persistente
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

// Cria store com redux persistente
const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
