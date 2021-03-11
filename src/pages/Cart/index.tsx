import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, Image} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import CardMachine from '../../interfaces/CardMachine';

import {RootState} from '../../redux/reducers';
import {removeCartItem} from '../../redux/actions/cartActions';

import RemoveItemConfirmation from '../../components/RemoveItemConfirmation';
import CartItemAlert from '../../components/CartItemAlert';

function Cart() {
  const items = useSelector((state: RootState) => state.cart.data);

  const [selectedItem, setSelectedItem] = useState<CardMachine>();
  const [removeItemAlertMessage, setRemoveItemAlertMessage] = useState<string>(
    '',
  );

  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeCartItem(selectedItem?.id!));

    setSelectedItem(undefined);

    setRemoveItemAlertMessage(
      `O item "${selectedItem?.name!}" foi removido do carrinho com sucesso!`,
    );

    setTimeout(() => {
      setRemoveItemAlertMessage('');
    }, 5000);
  }

  function handleOpenRemoveModal(item: CardMachine) {
    setSelectedItem(item);
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
        <>
          <FlatList
            ListHeaderComponent={() => (
              <Text style={styles.itemsNumber}>
                {items.length} produtos adicionados:
              </Text>
            )}
            contentContainerStyle={{paddingVertical: 20}}
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
                  onPress={() => handleOpenRemoveModal(item)}>
                  <FontAwesome name="trash-o" size={25} color="#fff" />
                </RectButton>
              </View>
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}
      {removeItemAlertMessage !== '' && (
        <CartItemAlert description={removeItemAlertMessage} type="remove" />
      )}
      {selectedItem && (
        <RemoveItemConfirmation
          name={selectedItem.name!}
          removeItem={handleRemoveItem}
          closeModal={() => setSelectedItem(undefined)}
        />
      )}
    </View>
  );
}

export default Cart;
