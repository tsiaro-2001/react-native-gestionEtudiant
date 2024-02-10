import React from 'react'
import { Image, View } from 'react-native'

const Menu = () => {
  return (
    <View style={{backgroundColor:'black', flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
        <View style={{backgroundColor: "gold", width: 100, height:100}}></View>
        <View style={{backgroundColor: "green", width: 100, height:100}}></View>
        <Image
            style={{
                width:50,
                height:50,
                
                alignSelf:'flex-end'
            }}
         source={require('../assets/chair.jpg')} />
    </View>
  )
}

export default Menu