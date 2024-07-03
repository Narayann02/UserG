import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import Notification from '../../assets/svg/Notification.svg';
import Man from '../../assets/svg/Man.svg';
import Dropdown from '../../assets/svg/Dropdown.svg';
import Search from '../../assets/svg/Search.svg';
import Setting from '../../assets/svg/Setting.svg';
import ImagePath from '../../constant/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../helper/Header';

const Action = [
  {
    id: 1,
    name: 'All',
  },

  {
    id: 1,
    name: 'Play Station',
  },
  {
    id: 1,
    name: 'X Box',
  },
  {
    id: 1,
    name: 'PC',
  },
  {
    id: 1,
    name: 'Nintendo',
  },
];

const addata = [
  {
    id: 1,
    image: ImagePath.FIFA2022,
    tittle: 'FIFA 2022',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
  {
    id: 2,
    image: ImagePath.Grandtheft,
    tittle: 'FIFA 2022',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
  {
    id: 2,
    image: ImagePath.Shadow,
    tittle: 'Grand theft auto',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
  {
    id: 3,
    image: ImagePath.Abdullah,
    tittle: 'Shadow of war',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
  {
    id: 4,
    image: ImagePath.Miles,
    tittle: 'FIFA 2022',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
  {
    id: 5,
    image: ImagePath.FIFA2022,
    tittle: 'FIFA 2022',
    heartimage: ImagePath.Heart,
    name: 'Games store',
    storeimage: ImagePath.Store,
    ps: 'PS4  - PS5',
    imagestar: ImagePath.StarYe,
    rating: '4.6',
    doller: '$55',
    include: 'tax Incl.',
  },
];

const ActionCategory = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={5} name={'Action'} />

      <View style={StyleGloble.paddingScreen}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#201F1F',
              borderRadius: 8,
              height: 50,
              paddingLeft: 15,
              width: 260,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Search />
            <TextInput placeholder="Search" placeholderTextColor={'#FFFFFF'} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#201F1F',
              borderRadius: 8,
              alignSelf: 'center',
              padding: 12,
            }}>
     
              <Setting />
          
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
  
            data={Action}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <TouchableOpacity style={{margin:5}}>
                <View
                  style={{
                    backgroundColor: '#161515',
                    borderRadius: 12,
                    padding: 10,
                    alignSelf: 'center',
                    marginTop:20
                    
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: '#BCBBBB'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <FlatList
        style={{marginBottom:95}}
          data={addata}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>navigation.navigate("Storeitemdetail",)}>
              <LinearGradient
                style={{
                  borderWidth: 1,
                  borderColor: '#201F1F',
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: 'row',
                  marginTop:30,
                }}
                colors={['#222222', '#0F0F0F']}>
                <Image style={{height: 96, width: 96}} source={item.image} />

                <View style={{marginLeft: 20}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width:185
                    }}>
                    <Text
                      style={{
                        color: '#BCBBBB',
                        fontSize: 16,
                        fontWeight: '700',
                      }}>
                      {item.tittle}
                    </Text>
                    <Image
                      style={{height: 18, width: 18}}
                      source={item.heartimage}
                    />
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: '#6EBAF1',
                        fontSize: 12,
                        fontWeight: '700',
                        textDecorationLine: 'underline',
                      }}>
                      {item.name}
                    </Text>
                    <Image
                      style={{height: 16, width: 16, marginLeft: 10}}
                      source={item.storeimage}
                    />
                  </View>

                  <Text
                    style={{
                      color: '#797979',
                      fontSize: 12,
                      fontWeight: '400',
                      marginTop: 20,
                    }}>
                    {item.ps}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{height: 9, width: 9}}
                        source={item.imagestar}
                      />
                      <Text
                        style={{
                          color: '#FFC01F',
                          fontSize: 10,
                          fontWeight: '400',
                          left: 4,
                        }}>
                        {item.rating}
                      </Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#F65F6F',
                          fontSize: 16,
                          fontWeight: '700',
                          right: 5,
                        }}>
                        {item.doller}
                      </Text>
                      <Text
                        style={{
                          color: '#797979',
                          fontSize: 10,
                          fontWeight: '500',
                        }}>
                        {item.include}
                      </Text>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ActionCategory;
