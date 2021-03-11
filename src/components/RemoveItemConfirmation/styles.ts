import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    fontFamily: 'GothamRounded-Medium',
    fontWeight: '400',
    color: '#212529',
    textAlign: 'center',
  },
  main: {
    backgroundColor: '#fff',
    opacity: 1,
    padding: 20,
    borderRadius: 8,
    width: 450,
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: 20,
  },
  remove: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  cancel: {
    backgroundColor: '#6c757d',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'GothamRounded-Medium',
    fontWeight: '400',
    color: '#fff',
  },
});

export default styles;
