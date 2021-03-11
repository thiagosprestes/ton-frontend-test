import React from 'react';

import {Text, View} from 'react-native';

import styles from './styles';

interface Props {
  description: string;
  type: string;
}

function CartItemAlert({description, type}: Props) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: type === 'add' ? '#28a745' : '#dc3545'},
      ]}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default CartItemAlert;
