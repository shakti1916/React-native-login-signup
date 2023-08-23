import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,bgColor,textColor, onPress}) => {
  return (
    <TouchableOpacity style={{backgroundColor:bgColor,justifyContent:"center",alignItems:"center",width:"20%", height:40, alignSelf:"center",borderRadius:10, marginTop:30}} onPress={onPress}>
        <Text style={{color:textColor}}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton