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
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item.picture}} />
            <Text>{item.value}</Text>
            <RectButton onPress={() => handleAddToCart(item)}>
              <Text>Adicionar ao carrinho +</Text>
            </RectButton>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export default Home;
