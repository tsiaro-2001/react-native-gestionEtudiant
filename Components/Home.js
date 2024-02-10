import React from 'react'
import { Image, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={{backgroundColor:"white", flex:1, flexDirection:'column', justifyContent:'center'}}>
        <View>
            <Image style={{
                width:50,
                height: 50
            }} source={require('../assets/logo-red.png')} />
            <Text>Bienvenue sur mon app</Text>
        </View>
        <Image style={{
            flexBasis:500, // height:500
            width:430,
            flexGrow:1
            }} 
            source={require('../assets/background.jpg')
        } />
        <View style={{backgroundColor: 'gold' , width:500, height: 50}}></View>
        <View style={{backgroundColor: 'blue' , width:500, height: 50}}></View>
    </View>
  )
}

export default Home
