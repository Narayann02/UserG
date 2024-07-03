import {ImageBackground, LogBox, StyleSheet} from 'react-native';

export const StyleGloble = StyleSheet.create({
  container: {
    flex: 1,
  },

  ImageBackground: {
    backgroundColor: '#0F0F0F',
    height: '100%',
    width: '100%',
  },
  paddingScreen: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  textheading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F65F6F',
  },
  fon20700white: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  textInputContainer: {
    marginTop: 15,
  },
  roundedTextInput: {
    borderRadius: 12,
    borderWidth: 1,
    width: 62,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#797979',
    borderColor: '#797979',
    color: 'white',
  },
  fon16700FFFF: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  LogBox: {
    borderColor: '#797979',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fon13400FFF: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  fon15400BCBBBB: {
    fontSize: 15,
    fontWeight: '400',
    color: '#BCBBBB',
  },
  fon15600WidthBCBBBB: {
    fontSize: 16,
    fontWeight: '600',
    color: '#BCBBBB',
  },
  contentcenter:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },

  fon14500FFFFFF:{
    fontSize:14,
    fontWeight:'500',
    color:'#FFFFFF'
  },
  fon16500FFFFFF:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'500'

  }
});
