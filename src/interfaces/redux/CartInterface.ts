import CardMachine from '../CardMachine';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export interface CartState {
  data: CardMachine[];
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  item: CardMachine;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: number;
}

export type CartActionTypes = AddItemAction | RemoveItemAction;
