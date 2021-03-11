import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  itemsList: {paddingHorizontal: 10},
  cardMachine: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    width: 225,
    height: 285,
  },
  cardMachinePicture: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  cardMachineName: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 24,
    color: '#00c700',
  },
  cardMachineValue: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 26,
    color: '#000',
  },
  addToCartButton: {
    marginTop: 16,
    backgroundColor: '#00c700',
    borderRadius: 37,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  removeFromCartButton: {
    marginTop: 16,
    backgroundColor: '#dc3545',
    borderRadius: 37,
    paddingVertical: 5,
    paddingHorizontal: 14,
  },
  addToCartButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#fff',
  },
});

export default styles;
