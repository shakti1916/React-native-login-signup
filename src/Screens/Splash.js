import { View, Text,Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
        getData()
    
    }, 1000);
  }, []);

  const getData = () =>{
    navigation.navigate('Login')
  }
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../images/logoapp.jpg')} style={{width:100, height:100, borderRadius:40}}/>
      <Text style={{padding:10,color:"#87CEEB",fontWeight:"bold",letterSpacing:2, fontSize:14}}>
        Welcome to Login and Signup app
      </Text>
    </View>
  );
};

export default Splash;
