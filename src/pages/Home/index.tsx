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
  const [showAddItemAlert, setShowAddItemAlert] = useState<boolean>(false);
  const [showRemoveItemAlert, setShowRemoveItemAlert] = useState<boolean>(
    false,
  );

  const cartItems = useSelector((state: RootState) => state.cart.data);

  const dispatch = useDispatch();

  function handleAddToCart(item: CardMachine) {
    dispatch(addCartItem(item));

    setShowAddItemAlert(true);

    setTimeout(() => {
      setShowAddItemAlert(false);
    }, 5000);
  }

  function handleRemoveFromCart(id: number) {
    dispatch(removeCartItem(id));

    setShowRemoveItemAlert(true);

    setTimeout(() => {
      setShowRemoveItemAlert(false);
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
                onPress={() => handleRemoveFromCart(item.id)}
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
      {showAddItemAlert && (
        <CartItemAlert
          description='O item "T1" foi adicionado com sucesso ao carrinho!'
          type="add"
        />
      )}
      {showRemoveItemAlert && (
        <CartItemAlert
          description='O item "T1" foi removido do carrinho com sucesso!'
          type="remove"
        />
      )}
    </View>
  );
}

export default Home;
