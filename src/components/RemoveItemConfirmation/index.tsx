import React from 'react';

import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

interface Props {
  name: string;
  removeItem(): void;
  closeModal(): void;
}

function RemoveItemConfirmation({name, removeItem, closeModal}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.description}>
          Tem certeza que deseja remover o item "{name}" do carrinho?
        </Text>
        <View style={styles.buttons}>
          <RectButton style={styles.remove} onPress={removeItem}>
            <Text style={styles.buttonText}>Remover</Text>
          </RectButton>
          <RectButton style={styles.cancel} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default RemoveItemConfirmation;
