import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <View style={{flex:1}}>
      <Image source={require("../images/logoapp.jpg")} style={{width:60, height:60, borderRadius:40,alignSelf:"center", marginTop:100}}/>
      <Text style={{marginTop:30, fontSize:24, fontWeight:"600", alignSelf:"center"}}>
        Login
      </Text>
      <CustomInput placeholder={"Enter Email id"} icon={require('../images/mail.png')} value={email} onChangeText={txt=>{
        setEmail(txt)
      }}/>
      <CustomInput placeholder={"Enter Password"} icon={require('../images/padlock.png')} value={password} onChangeText={txt=>{
        setPassword(txt)
      }}/>
      <CustomButton title={"Login"} bgColor={"#000"} textColor={"#fff"} onPress={()=>{}}/>

    </View>
  )
}

export default Login