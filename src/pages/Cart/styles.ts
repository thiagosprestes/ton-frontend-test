import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsList: {paddingHorizontal: 10},
  cardMachine: {
    backgroundColor: '#fff',
    padding: 16,
    paddingRight: 25,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row',
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
  removeItem: {
    backgroundColor: '#dc3545',
    borderRadius: 50,
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyCartText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 26,
    color: '#b9bbb6',
    textAlign: 'center',
    width: 400,
    marginTop: 20,
  },
  itemsNumber: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 18,
    color: '#b9bbb6',
    marginBottom: 10,
  },
});

export default styles;
