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
import RemoveItemConfirmation from '../../components/RemoveItemConfirmation';

function Home() {
  const [addItemAlertMessage, setAddItemAlertMessage] = useState<string>('');
  const [removeItemAlertMessage, setRemoveItemAlertMessage] = useState<string>(
    '',
  );
  const [selectedItem, setSelectedItem] = useState<CardMachine>();

  // Lista de itens que já estão no carrinho
  const cartItems = useSelector((state: RootState) => state.cart.data);

  const dispatch = useDispatch();

  // Função para adicionar item ao carrinho
  function handleAddToCart(item: CardMachine) {
    // Adiciona item ao estado do carrinho no redux
    dispatch(addCartItem(item));

    // Dispara mensagem com item que foi adicionado ao carrinho
    setAddItemAlertMessage(
      `O item "${item.name}" foi adicionado ao carrinho com sucesso!`,
    );

    // Remove sobre ação realizada
    setTimeout(() => {
      setAddItemAlertMessage('');
    }, 5000);
  }

  // Função para remover item do carrinho
  function handleRemoveFromCart() {
    // Remove o item do estado do redux
    dispatch(removeCartItem(Number(selectedItem?.id)));

    // Remove o item selecionado para exclusão do estado
    setSelectedItem(undefined);

    // Adiciona mensagem ao usuário com item que foi removido do carrinho
    setRemoveItemAlertMessage(
      `O item "${selectedItem?.name!}" foi removido do carrinho com sucesso!`,
    );

    // Remove mensagem sobre ação realizada
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
                testID="removeItemFromListButton"
                onPress={() => setSelectedItem(item)}
                style={styles.removeFromCartButton}>
                <Text style={styles.addToCartButtonText}>
                  Remover do carrinho <FontAwesome name="close" size={14} />
                </Text>
              </RectButton>
            ) : (
              <RectButton
                testID="addButton"
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
      {selectedItem && (
        <RemoveItemConfirmation
          name={selectedItem.name!}
          removeItem={handleRemoveFromCart}
          closeModal={() => setSelectedItem(undefined)}
        />
      )}
    </View>
  );
}

export default Home;
