import React, {useState} from 'react';

import {FlatList, Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import items from '../../utils/db.json';

import CardMachine from '../../interfaces/CardMachine';

import {addCartItem, removeCartItem} from '../../redux/actions/cartActions';

import {RootState} from '../../redux/reducers';
import CartItemAlert from '../../components/CartItemAlert';

function Home() {
  const [addItemAlertMessage, setAddItemAlertMessage] = useState<string>('');
  const [removeItemAlertMessage, setRemoveItemAlertMessage] = useState<string>(
    '',
  );

  const cartItems = useSelector((state: RootState) => state.cart.data);

  const dispatch = useDispatch();

  function handleAddToCart(item: CardMachine) {
    dispatch(addCartItem(item));

    setAddItemAlertMessage(
      `O item "${item.name}" foi adicionado ao carrinho com sucesso!`,
    );

    setTimeout(() => {
      setAddItemAlertMessage('');
    }, 5000);
  }

  function handleRemoveFromCart(item: CardMachine) {
    dispatch(removeCartItem(Number(item.id)));

    setRemoveItemAlertMessage(
      `O item "${item.name}" foi removido do carrinho com sucesso!`,
    );

    setTimeout(() => {
      setRemoveItemAlertMessage('');
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemsList}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingTop: 20}}
        numColumns={2}
        data={items}
        renderItem={({item}) => (
          <View style={styles.cardMachine}>
            <Image
              source={{uri: item.picture}}
              style={styles.cardMachinePicture}
            />
            <Text style={styles.cardMachineName}>{item.name}</Text>
            <Text style={styles.cardMachineValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.value)}
            </Text>
            {cartItems.find((cartItem) => cartItem.id === item.id) ? (
              <RectButton
                onPress={() => handleRemoveFromCart(item)}
                style={styles.removeFromCartButton}>
                <Text style={styles.addToCartButtonText}>
                  Remover do carrinho <FontAwesome name="close" size={14} />
                </Text>
              </RectButton>
            ) : (
              <RectButton
                onPress={() => handleAddToCart(item)}
                style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>
                  Adicionar ao carrinho +
                </Text>
              </RectButton>
            )}
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
      {addItemAlertMessage !== '' && (
        <CartItemAlert description={addItemAlertMessage} type="add" />
      )}
      {removeItemAlertMessage !== '' && (
        <CartItemAlert description={removeItemAlertMessage} type="remove" />
      )}
    </View>
  );
}

export default Home;
