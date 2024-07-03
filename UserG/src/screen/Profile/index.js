import React from 'react';
import {
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
import Forgame from '../../assets/svg/Forgame.svg';
import Chevrondown from '../../assets/svg/Chevrondown.svg';
import ImagePath from '../../constant/ImagePath';
import Editalt from '../../assets/svg/Editalt.svg';
import Editalt2 from '../../assets/svg/Editalt2.svg';
import User from '../../assets/svg/User.svg';
import Email from '../../assets/svg/Email.svg';
import Mobile from '../../assets/svg/Mobile.svg';
import Maplocation from '../../assets/svg/Maplocation.svg';
import Globe from '../../assets/svg/Globe.svg';
import Currentlocation from '../../assets/svg/Currentlocation.svg';
import Location from '../../assets/svg/Location.svg';
import Bank from '../../assets/svg/Bank.svg';
import Postal from '../../assets/svg/Postal.svg';
import Lock from '../../assets/svg/Lock.svg';

const Profile = ({navigation}) => {
  return (
    <View style={StyleGloble.ImageBackground}>
      <View style={StyleGloble.paddingScreen}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity>
            <Menu />
          </TouchableOpacity>

          <Text
            style={{
              ...StyleGloble.fon20700white,
              fontWeight: '600',
              marginLeft: 110,
            }}>
            Profile
          </Text>
        </View>

        <ScrollView style={{marginBottom: '20%'}}>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}} >
           <Image   style={{height:87,width:87}} source={ImagePath.Dummy}/>

            <Editalt style={{marginTop:-22,left:50}} />

            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#F65F6F',
                alignSelf: 'center',
                marginTop:20
              }}>
              Sara.cruz
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#BCBBBB',
                alignSelf: 'center',
              }}>
              sara.cruz@example.com
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{...StyleGloble.fon16700FFFF, fontWeight: '600'}}>
              Personal informtion
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Editalt2 />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#F65F6F',
                  alignSelf: 'center',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 142,
              width: 330,
              borderRadius:10,
              alignSelf: 'center',
              marginTop: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <User />
              <Text style={styles.namestyle}>Jenny Wilson</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Email />
              <Text style={styles.namestyle}>sara.cruz@example.com</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 15,
              }}>
              <Mobile />
              <Text style={styles.namestyle}>+966-504218617</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{...StyleGloble.fon16700FFFF, fontWeight: '600'}}>
              Address
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Editalt2 />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#F65F6F',
                  alignSelf: 'center',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 274,
              width: 330,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Maplocation />
              <Text style={styles.whiteFF}>Region :</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                11333
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Globe />
              <Text style={styles.whiteFF}>city :</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                Riyadh
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Currentlocation />
              <Text style={styles.whiteFF}>district :</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                King Abdulaziz Branch Road
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Location />
              <Text style={styles.whiteFF}>Street</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                King Abdulaziz Branch Road
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Bank />
              <Text style={styles.whiteFF}>build number</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                13
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
                marginTop: 18,
              }}>
              <Postal />
              <Text style={styles.whiteFF}>Postal code :</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#BCBBBB',
                  left: 8,
                }}>
                11333
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text style={{...StyleGloble.fon16700FFFF, fontWeight: '600'}}>
              Privacy setting
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#201F1F',
              height: 78,
              width: 330,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 18,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Lock />
              <Text style={styles.namestyle}>**********</Text>
            </View>

            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: '#F65F6F',
                  marginRight: 15,
                }}>
                Change password
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namestyle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#BCBBBB',
    marginLeft: 8,
  },
  contentstyle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#BCBBBB',
  },
  whiteFF: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
  },
});
export default Profile;
