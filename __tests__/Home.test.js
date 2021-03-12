import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Home from '../src/pages/Home';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import {act} from 'react-test-renderer';

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
});

test('It should be able to render card machines list', () => {
  const {getAllByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const button = getAllByText('Adicionar ao carrinho +');

  expect(button).toBeDefined();
});

test('It should be able to add item to cart', async () => {
  const {getAllByTestId, getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const addToCartButton = await getAllByTestId('addButton');

  act(async () => {
    await fireEvent.press(addToCartButton[0]);
  });

  const getAlertMessage = await getByText(
    'O item "T1" foi adicionado ao carrinho com sucesso!',
  );

  expect(getAlertMessage).toBeDefined();
});

test('It should be able to remove item from cart', async () => {
  const {getAllByTestId, getByText, getByTestId} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const openModalButton = getAllByTestId('removeButton');

  fireEvent.press(openModalButton[0]);

  const removeButton = getByTestId('removeItemButton');

  fireEvent.press(removeButton);

  const removedMessage = getByText(
    'O item "T1" foi removido do carrinho com sucesso!',
  );

  expect(removedMessage).toBeDefined();
});
