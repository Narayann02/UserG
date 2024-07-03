import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {StyleGloble} from '../../helper/GlobleCss';
import Menu from '../../assets/svg/Menu.svg';
import Notification from '../../assets/svg/Notification.svg';
import Man from '../../assets/svg/Man.svg';
import Dropdown from '../../assets/svg/Dropdown.svg';
import Search from '../../assets/svg/Search.svg';
import Setting from '../../assets/svg/Setting.svg';
import {styles} from './style';
import RedDoots from '../../assets/svg/RedDoots.svg';
import ImagePath from '../../constant/ImagePath';
import Button from '../../helper/Button';
import Plus from '../../assets/svg/Plus.svg';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../../assets/svg/Home.svg';
import Shoppingbag from '../../assets/svg/Shoppingbag.svg';
import Bullhorn from '../../assets/svg/Bullhorn.svg';
import Shopincart from '../../assets/svg/Shopincart.svg';
import Heart from '../../assets/svg/Heart.svg';
import Chat from '../../assets/svg/Chat.svg';
import Wallet from '../../assets/svg/Wallet.svg';
import Infocircle from '../../assets/svg/Infocircle.svg';
import Phoneout from '../../assets/svg/Phoneout.svg';
import Locationquestion from '../../assets/svg/Locationquestion.svg';
import Stack from '../../assets/svg/Stack.svg';
import Becometrader from '../../assets/svg/Becometrader.svg';
import Person from '../../assets/svg/Person.svg';
import Logout from '../../assets/svg/Logout.svg';
import About from '../../assets/svg/About.svg';
import LogoutRed from '../../assets/svg/LogoutRed.svg';
import Carousel,{Pagination} from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const data = [
	{
		id: 1,
		like: true
	},
	{
		id: 2,
	},
	{
		id: 3,
		like: false

	},
]

const plateformdata = [
  {
    id: 1,

    image: ImagePath.Plateformplay,
  },
  {
    id: 2,

    image: ImagePath.Plateformplay,
  },
];

const categorydata = [
  {
    id: 1,

    image: ImagePath.Frame551,
  },
  {
    id: 2,

    image: ImagePath.Frame512,
  },
];

const adsdata = [
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
    include: 'VAT Incl.',
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
    include: 'VAT Incl.',
  },
];

const slides = [
  {
    key: '1',
    image: ImagePath.freegames,
  },
  {
    key: '2',
    image: ImagePath.freegames,
  },
];

const HomePage = ({navigation}) => {
  const [showmodal, setshowmodal] = useState(false);
  const [showpoup, setshowpoup] = useState(false);
  const [optiontab,setoptiontab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderPagination = () => {
   <Pagination 
   
   dotsLength={data.length}
			activeDotIndex={activeIndex}
			containerStyle={{ backgroundColor: 'transparent', paddingVertical: 8 }}
			dotStyle={{
				width: 30,
				height: 5,
				borderRadius: 5,
				marginHorizontal: -8,
				backgroundColor: '#F78164'
			}}

			inactiveDotOpacity={0.2}
			inactiveDotScale={0.4}
   
   />
  };

  return (
    <View style={StyleGloble.ImageBackground}>
      <Modal transparent={true} visible={showmodal}>
        <TouchableOpacity onPress={() => setshowmodal(false)}>
          <View
            style={{backgroundColor: '#201F1F', height: '100%', width: 276}}>
            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 64, width: 64}}
                source={ImagePath.OmarNoaman}
              />
              <Text style={styles.textmodal}>Omar Noaman</Text>
              <Text style={styles.gmaimaodal}>Omar.Noaman@Lobb.sa</Text>
            </View>

            <TouchableOpacity style={{marginTop: 15}}>
              <LinearGradient
                colors= {['#F65F6F', '#F78164']}
                style={{
                  borderRadius: 7,
                  padding: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                  marginRight: 20,
                }}>
                <Home />
                <Text style={{...styles.homestyle, marginLeft: 20}}>
                  Home Screen
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={{marginLeft: 25}}>
             
              <TouchableOpacity  onPressIn={()=>setoptiontab(1)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('MyOrder')}>
                <Shoppingbag />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  My orders
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Myfavorites')}>
                <Heart />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  My favorites
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Message')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Chat />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('My Cart')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Shopincart />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  My Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Myads')}>
                <Bullhorn />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  My Ads
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Mywallet')}>
                <Wallet />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  My Wallet
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#373737',
                  marginTop: 15,
                  marginRight: 20,
                }}
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Aboutus')}>
                <About />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  About Us
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Contactus')}>
                <Phoneout />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  Contact Us
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Locationquestion />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>Help</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('TermsConditions')}>
                <Stack />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  Terms & Condition 
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Becometrader />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  Become a trader
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}
                onPress={() => navigation.navigate('Profile1')}>
                <Person />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setshowpoup(true)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <Logout />
                <Text style={{...styles.shoppinsty, marginLeft: 20}}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 30,
        }}>
        <TouchableOpacity onPress={() => setshowmodal(true)}>
          <Menu />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => navigation.navigate('Notification')}>
            <Notification />
          </TouchableOpacity>
          <View style={{marginRight: 20}}>
            <Man />
          </View>
          <View style={{marginRight: 5}}>
            <Text style={styles.fon12600FFFFFF}>En</Text>
          </View>

          <TouchableOpacity>
            <Dropdown />
          </TouchableOpacity>
        </View>
      </View>

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
            <TextInput
              style={{width: 210}}
              placeholder="Search"
              placeholderTextColor={'#FFFFFF'}
            />
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

        <FlatList
          style={{marginBottom: '54%'}}
          data={[{name: 'abcg'}]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <>
             	<View style={{ marginTop: 20 }}>
								<Carousel
									layout={'default'}
									data={data}
									renderItem={(t) => (
										<View style={{ padding: 0 }}>
											<ImageBackground source={ImagePath.freegames} style={{ height: height / 4, width: width - 40 }} imageStyle={{ borderRadius: 8 }}>
											</ImageBackground>
										</View>
									)}
									sliderWidth={width}
									autoplay={true}
									hasParallaxImages={true}
									firstItem={0}
									loop={true}
									loopClonesPerSide={2}
									containerCustomStyle={{ marginLeft: 0 }}
									itemWidth={width}
									onSnapToItem={(index) => setActiveIndex(index)}
								/>
								<View style={{ marginTop:10}}>
									{renderPagination()}
								</View>
							</View>

              {/* <View style={{marginTop: 15, alignSelf: 'center'}}>
                <RedDoots />
              </View> */}

              <TouchableOpacity
                style={{marginTop: 15}}
                onPress={() => navigation.navigate('NewPost')}>
                <LinearGradient
                  style={{
                    borderRadius: 50,
                    flexDirection: 'row',
                    padding: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  colors={['#F65F6F', '#F78164']}>
                  <Plus />
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#FFFFFF'}}>
                    Post Ad
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={{marginTop: 30}}>
                <Text style={styles.font16500BCBBBB}>Platforms</Text>
              </View>

              <FlatList
                style={{marginTop: 10}}
                data={plateformdata}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <Image
                      style={{height: 75, width: 184}}
                      source={item.image}
                    />
                  </>
                )}
              />

              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.font16500BCBBBB}>Categories</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Categories')}>
                  <Text
                    style={{fontSize: 16, fontWeight: '400', color: '#F65F6F'}}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                style={{marginTop: 10}}
                data={categorydata}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <Image
                      style={{height: 75, width: 184}}
                      source={item.image}
                    />
                  </>
                )}
              />

              <View
                style={{
                  marginTop: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 20, fontWeight: '600', color: '#FFFFFF'}}>
                  Ads
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('AdList')}>
                  <Text
                    style={{fontSize: 16, fontWeight: '400', color: '#F65F6F'}}>
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={adsdata}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                  <>
                    <LinearGradient
                      style={{
                        borderWidth: 1,
                        borderColor: '#201F1F',
                        borderRadius: 10,
                        height: 120,
                        flexDirection: 'row',
                        marginTop: 15,

                        alignItems: 'center',
                      }}
                      colors={['#222222', '#0F0F0F']}>
                      <Image
                        style={{height: 96, width: 96, marginLeft: 10}}
                        source={item.image}
                      />

                      <View style={{marginLeft: 18}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: 185,
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

                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View></View>
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
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
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

                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              // right:10
                            }}>
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
                  </>
                )}
              />
            </>
          )}
        />

        <Modal transparent={true} visible={showpoup}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#797979',
              backgroundColor: '#0F0F0F',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              height: 295,
              width: 320,
              alignSelf: 'center',
              marginTop: 250,
            }}>
            <LogoutRed />

            <Text style={{...StyleGloble.fon20700white, fontSize: 24}}>
              Logout?
            </Text>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#BCBBBB'}}>
              Are you sure you want to Logout?
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{width: 144, alignItems: 'center'}}
                onPress={() => setshowpoup(false)}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#BCBBBB'}}>
                  Not now
                </Text>
              </TouchableOpacity>
              <View style={{width: 144}}>
                <Button
                  label={'Logout'}
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default HomePage;
