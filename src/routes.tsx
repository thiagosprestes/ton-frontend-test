import React from 'react';

import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home';
import Cart from './pages/Cart';

import {RootState} from './redux/reducers';

const Stack = createStackNavigator();

export default function Routes() {
  const items = useSelector((state: RootState) => state.cart.data);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#00c700',
          },
          headerTitleStyle: {
            fontFamily: 'GothamRounded-Bold',
          },
          headerRight: () => (
            <>
              <FontAwesome
                name="shopping-cart"
                size={30}
                color="#fff"
                onPress={() => navigation.navigate('Cart')}
              />
              {items.length > 0 && (
                <View
                  style={{
                    backgroundColor: '#dc3545',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 5,
                    right: -10,
                    height: 20,
                    width: 20,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'GothamRounded-Bold',
                      fontSize: 11,
                    }}>
                    {items.length}
                  </Text>
                </View>
              )}
            </>
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
        })}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Carrinho',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
