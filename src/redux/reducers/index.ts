import {combineReducers} from 'redux';

import cartReducer from './cartReducer';

// Unifica todos os reducers em um reducer raiz
export const rootReducer = combineReducers({
  cart: cartReducer,
});

// Exportação da tipagem do reducer raiz
export type RootState = ReturnType<typeof rootReducer>;
