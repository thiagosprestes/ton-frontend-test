import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, Image} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import {RootState} from '../../redux/reducers';
import {removeCartItem} from '../../redux/actions/cartActions';

function Cart() {
  const items = useSelector((state: RootState) => state.cart.data);

  const dispatch = useDispatch();

  function handleRemoveItem(id: number) {
    dispatch(removeCartItem(id));
  }

  return (
    <View style={styles.container}>
      {items.length <= 0 ? (
        <View style={styles.emptyCart}>
          <MaterialCommunityIcons
            name="cart-remove"
            size={100}
            color="#b9bbb6"
          />
          <Text style={styles.emptyCartText}>
            Você ainda não adicionou nenhum item ao carrinho
          </Text>
        </View>
      ) : (
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
                  }).format(item.value!)}
                </Text>
              </View>
              <RectButton
                style={styles.removeItem}
                onPress={() => handleRemoveItem(item.id!)}>
                <FontAwesome name="trash-o" size={25} color="#fff" />
              </RectButton>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </View>
  );
}

export default Cart;
