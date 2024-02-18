import React from 'react'
import { View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


const Icon = ({size, backgroundColor, color, name }) => {
  return (
    <View style={{
        backgroundColor,
        width: size ,
        height: size,
        borderRadius: size/2,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <MaterialCommunityIcons name={name} size={size*0.5} color={color} />
    </View>
  )
}

export default Icon