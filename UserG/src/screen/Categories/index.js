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

const adsdata = [
  {
    id: 1,
    image: ImagePath.PlayS,
  },
  {
    id: 2,
    image: ImagePath.Djplay,
  },
];

const ad2data = [
  {
    id: 1,
    image: ImagePath.Pclaptop,
  },
  {
    id: 2,
    image: ImagePath.Nintento,
  },
];

const Plateformdata = [
  {
    id: 1,
    image: ImagePath.Action,
  },
  {
    id: 2,
    image: ImagePath.Sports,
  },
  {
    id: 3,
    image: ImagePath.Shooter,
  },
  {
    id: 4,
    image: ImagePath.Stratengy,
  },
  {
    id: 5,
    image: ImagePath.BattleRoyale,
  },
  {
    id: 6,
    image: ImagePath.Boxer,
  },
  {
    id: 7,
    image: ImagePath.Adventure,
  },
  {
    id: 8,
    image: ImagePath.Survival,
  },
  {
    id: 9,
    image: ImagePath.Cards,
  },
  {
    id: 10,
    image: ImagePath.Car,
  },

];

const Categories = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <Header type={1} name={'Search'} />

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
          <View
            style={{
              backgroundColor: '#201F1F',
              borderRadius: 8,
              alignSelf: 'center',
              padding: 12,
            }}>
            <TouchableOpacity>
              <Setting />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={[{name: 'abch'}]}
          renderItem={({item}) => (
            <>
              <View style={{marginTop: 30}}>
                <Text
                  style={{...StyleGloble.fon16500FFFFFF, fontWeight: '600'}}>
                  Platforms
                </Text>
              </View>

              <FlatList
                data={adsdata}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <TouchableOpacity>
                    <View style={{marginTop: 20}}>
                      
                      <Image
                        style={{height: 150, width: 164}}
                        source={item.image}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />

              <FlatList
                data={ad2data}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <View style={{marginTop: 20}}>
                      <Image
                        style={{height: 150, width: 164}}
                        source={item.image}
                      />
                    </View>
                  </>
                )}
              />

              <View style={{marginTop: 25}}>
                <Text
                  style={{...StyleGloble.fon16500FFFFFF, fontWeight: '600'}}>
                  Category
                </Text>
              </View>

              <FlatList
              showsHorizontalScrollIndicator={false}
                data={Plateformdata}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      style={{marginTop: 20,}}
                      onPress={() => navigation.navigate('ActionCategory')}>
                      
                      <Image
                        style={{height: 150, width: 164}}
                        source={item.image}
                      />
                    </TouchableOpacity>
                  </>
                )}
              />

              <FlatList
                data={Plateformdata}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <View style={{marginTop: 20,flexDirection:'row'}}>
                      <Text>{item.id}</Text>
                      <Image
                        style={{height: 150, width: 164}}

                        source={item.image}
                      />
                    </View>
                  </>
                )}
              />

              <FlatList
                data={Plateformdata}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <View style={{marginTop: 20}}>
                      <Image
                        style={{height: 150, width: 164}}
                        source={item.image}
                      />
                    </View>
                  </>
                )}
              /> 

               <FlatList
                data={Plateformdata}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <View style={{marginTop: 20}}>
                      <Image
                        style={{height: 150, width: 164}}
                        source={item.image}
                      />
                    </View>
                  </>
                )}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};

export default Categories;
