import React from 'react';

import {FlatList, Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import items from '../../utils/db.json';

import CardMachine from '../../interfaces/CardMachine';

function Home() {
  function handleAddToCart(item: CardMachine) {
    console.log(item);
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
            <RectButton
              onPress={() => handleAddToCart(item)}
              style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>
                Adicionar ao carrinho +
              </Text>
            </RectButton>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export default Home;
