// import React, { useState, useCallback, useEffect } from 'react';
// import { Text, View, Keyboard, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
// import { StylesGloble } from '../../helper/GlobleCss';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Headercomp from '../../helper/Headercomp';
// import { Styles } from './styles';
// import MainCard from '../../helper/MainCard';
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// const data= [
//     {
//         id:1
//     },{
//         id:2
//     },
// ]

// const TaskHistory = ({ navigation }) => {
//     const [keyboardheight, setkeyboardheight] = useState('65%');
//     const [changebtnval, setchangebtnval] = useState(1)
   
//     return (

//         <View style={{ width: "100%", height: '500%', backgroundColor: '#ffffff', position: "relative" }}>
//             <FlatList
//             data={data}
//             showsVerticalScrollIndicator={false}
//             renderItem={(item)=><MainCard data={item} navigation={navigation}/>}
//             />
//         </View>
//     );
// };
// export default TaskHistory;
