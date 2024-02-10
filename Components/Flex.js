import React from 'react'
import { View } from 'react-native'

const Flex = () => {
  return (
    <View style={{
        backgroundColor: "white",
        flex:1,
        flexDirection:'row', //horizontale
        justifyContent:'center', // @ le horizontale
        alignItems:'center', // vertical
        position:'relative'
       
      
      }}>
        <View style={{backgroundColor: "dodgerblue", width:100, height: 100, }} />
        <View style={{backgroundColor: "orange", width:100, height: 100}} />
        <View style={{backgroundColor: "red", width:100, height: 100}} />
      </View>
  )
}

export default Flex
