import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'

const CustomInput = ({value,onChangeText, placeholder,icon, type, keyboardtype}) => {
  return (
    <View style={{width:'85%',height:50, marginTop:30,borderWidth:0.5, borderRadius:10,paddingLeft:20,alignItems:"center",flexDirection:"row",
    alignSelf:"center"}}>
    <Image source={icon} style={{width:20,height:20}}/>
      <TextInput style={{marginLeft:10}} value={value} keyboardType={keyboardtype ? keyboardtype :'default'} placeholder={placeholder} onChangeText={txt=>{
        onChangeText(txt)
      }} secureTextEntry={type ? true :false}/>
    </View>
  )
}

export default CustomInput