import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {View, Text, FlatList, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import items from '../../utils/db.json';

function Cart() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemsList}
        data={items}
        renderItem={({item}) => (
          <View style={styles.cardMachine}>
            <Image
              source={{uri: item.picture}}
              style={styles.cardMachinePicture}
            />
            <View>
              <Text style={styles.cardMachineName}>{item.name}</Text>
              <Text style={styles.cardMachineValue}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.value)}
              </Text>
            </View>
            <RectButton style={styles.removeItem}>
              <FontAwesome name="trash-o" size={25} color="#fff" />
            </RectButton>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export default Cart;
