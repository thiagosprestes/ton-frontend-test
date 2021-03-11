import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#28a745',
    flexDirection: 'row',
  },
  description: {
    fontSize: 14,
    fontFamily: 'GothamRounded-Medium',
    color: '#fff',
    textAlign: 'center',
    marginRight: 8,
  },
});

export default styles;
