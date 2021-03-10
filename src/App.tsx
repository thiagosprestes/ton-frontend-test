import React from 'react';

import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import 'react-native-gesture-handler';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './routes';

import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00bf00" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
