import CardMachine from '../../interfaces/CardMachine';
import {CartActionTypes} from '../../interfaces/redux/CartInterface';

export function addCartItem(item: CardMachine): CartActionTypes {
  return {
    type: 'ADD_ITEM',
    item,
  };
}

export function removeCartItem(id: number): CartActionTypes {
  return {
    type: 'REMOVE_ITEM',
    id,
  };
}
