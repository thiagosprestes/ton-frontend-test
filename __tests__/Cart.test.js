import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import {act} from 'react-test-renderer';
import Cart from '../src/pages/Cart';
import {addCartItem} from '../src/redux/actions/cartActions';
import items from '../src/utils/db.json';

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
});

test('It should be able to render cart items', async () => {
  const {getByText} = render(
    <Provider store={store}>
      <Cart />
    </Provider>,
  );

  await act(async () => {
    store.dispatch(addCartItem(items[0]));
  });

  const listLengthIndicator = getByText('1 produto adicionado:');

  expect(listLengthIndicator).toBeDefined();
});

test('It should be able to remove item from cart', async () => {
  const {getAllByTestId, getByText, getByTestId} = render(
    <Provider store={store}>
      <Cart />
    </Provider>,
  );

  const openModalButton = getAllByTestId('removeItemFromListButton');

  fireEvent.press(openModalButton[0]);

  const removeButton = getByTestId('removeItemButton');

  fireEvent.press(removeButton);

  const removedMessage = getByText(
    'O item "T1" foi removido do carrinho com sucesso!',
  );

  expect(removedMessage).toBeDefined();
});
