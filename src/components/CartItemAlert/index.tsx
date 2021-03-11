import React from 'react';

import {Text, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

interface Props {
  description: string;
  type: string;
}

function CartItemAlert({description, type}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      {type === 'add' ? (
        <MaterialCommunityIcons name="cart-plus" size={30} color="#fff" />
      ) : (
        <MaterialCommunityIcons name="cart-remove" size={30} color="#fff" />
      )}
    </View>
  );
}

export default CartItemAlert;
