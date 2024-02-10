import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Text>Welcome in my app</Text>
        </View>
        <View style={styles.loginBtn}  />
        <View style={styles.deconBtn}  />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    loginBtn: {
        width: '100%',
        height: 50,
        backgroundColor: 'gold'
    },
    deconBtn: {
        width: '100%',
        height: 50,
        backgroundColor: 'red'
    },
    logo: {
        width: 100,
        height: 100,
        // position: 'absolute'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
  })

export default Welcome