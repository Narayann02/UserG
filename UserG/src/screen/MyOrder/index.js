import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../constant/ImagePath';
import Menufield from '../../helper/Menufield';
import Pendingtask from './Pendingtask';
import TaskHistory from './TaskHistory';


const orderdata = [
  {
    id: 1,
    image: ImagePath.PlayStation,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Cancel Order',
  },
  {
    id: 2,
    image: ImagePath.CallDuty,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Order Canceled',
  },
  {
    id: 3,
    image: ImagePath.ForzaHorizon,
    name: 'PS4 - Play Station 4 - Sony',
    quantity: 'Qty - 1',
    rupees: '$500',
    order: 'Order Canceled',
  },
];

const MyOrder = ({navigation}) => {
  const [setectedTab, setsetectedTab] = useState(0);
  const [changebtnval, setchangebtnval] = useState(1)


  return (
    <View style={StyleGloble.ImageBackground}>
      <Menufield name={'My Order'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
        }}>

          
        <TouchableOpacity
          onPress={() => {
            setsetectedTab(0);
          }}>
          <View
            style={{
              borderRadius: 8,
              height: 34,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: setectedTab == 0 ? '#F65F6F' : '#161515',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: setectedTab == 0 ? '#FFFFFF' : '#BCBBBB',
              }}>
              In progress
            </Text>
          </View>
        
      

        </TouchableOpacity>
         
    
        
                       

        <TouchableOpacity
          onPress={() => {
            setsetectedTab(1);
          }}
          style={{
            borderRadius: 8,
            height: 34,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: setectedTab == 1 ? '#F65F6F' : '#161515',
          }}>
            <TouchableOpacity onPress={()=>navigation.navigate('ordercompleted')}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: setectedTab == 1 ? '#FFFFFF' : '#BCBBBB',
            }}>
            Completed
          </Text>
          </TouchableOpacity>
        
        </TouchableOpacity>


        

        <TouchableOpacity
          onPress={() => setsetectedTab(2)}
          style={{
     
            borderRadius: 8,
            height: 34,
            width: 100,
            justifyContent: 'center',
            backgroundColor: setectedTab == 2 ? '#F65F6F' : '#161515',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: setectedTab == 2 ? '#FFFFFF' : '#BCBBBB',
            }}>
            Canceled
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#373737',
          marginTop: 20,
        }}
      />

      <View style={StyleGloble.paddingScreen}>
        <FlatList
          style={{marginBottom: '40%'}}
          data={[{name: 'abcd'}]}
          renderItem={({item}) => (
            <>
              <FlatList
                data={orderdata}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 40,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#F5F5F5',
                        }}>
                        Order ID : A-22514
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: '#F5F5F5',
                        }}>
                        July 25, 2022
                      </Text>
                    </View>

                    <View style={{marginTop: 15}}>
                      <LinearGradient
                        style={{
                          borderWidth: 1,
                          borderColor: '#201F1F',
                          padding: 12,
                          borderRadius: 8,
                        }}
                        colors={['#222222', '#0F0F0F']}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            style={{height: 75, width: 73}}
                            source={item.image}
                          />
                          <View style={{marginLeft: 20}}>
                            <Text style={styles.namedesign}>{item.name}</Text>
                            <Text style={styles.quantitydesign}>
                              {item.quantity}
                            </Text>

                            <Text style={styles.rupeedesign}>
                              {item.rupees}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#373737',
                            marginTop: 10,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#909090',
                            top: 5,
                          }}>
                          {item.order}
                        </Text>
                      </LinearGradient>
                    </View>
                  </View>
                )}
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 80,
                }}>
                <Text
                  style={{color: '#909090', fontSize: 16, fontWeight: '500'}}>
                  Rate our service
                </Text>
                <Text
                  style={{color: '#F66B6B', fontSize: 20, fontWeight: '500'}}>
                  Give Rating
                </Text>
              </View>
            </>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namedesign: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },

  quantitydesign: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  rupeedesign: {
    color: '#F65F6F',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MyOrder;
