import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#00c700',
          },
          headerTitleStyle: {
            fontFamily: 'GothamRounded-Bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
            headerRight: () => (
              <FontAwesome name="shopping-cart" size={30} color="#fff" />
            ),
            headerRightContainerStyle: {
              marginRight: 15,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
