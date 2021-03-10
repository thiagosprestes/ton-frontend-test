import {CartActionTypes, CartState} from '../../interfaces/redux/CartInterface';

const initialState: CartState = {
  data: [],
};

export default function cartReducer(
  state = initialState,
  action: CartActionTypes,
) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, data: [action.item, ...state.data]};

    case 'REMOVE_ITEM':
      const filteredItems = state.data.filter((item) => item.id !== action.id);

      return {...state, data: filteredItems};

    default:
      return state;
  }
}
