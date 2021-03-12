import CardMachine from '../../interfaces/CardMachine';
import {CartActionTypes} from '../../interfaces/redux/CartInterface';

// Adiciona item ao estado do carrinho no redux
export function addCartItem(item: CardMachine): CartActionTypes {
  return {
    type: 'ADD_ITEM',
    item,
  };
}

// Remove item do estado do carrinho no redux
export function removeCartItem(id: number): CartActionTypes {
  return {
    type: 'REMOVE_ITEM',
    id,
  };
}
