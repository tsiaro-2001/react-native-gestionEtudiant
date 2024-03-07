import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from './AppButton'
import colors from '../config/colors'

const Welcome = ({navigation}) => {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Text style={styles.tagLine}>Welcome in my app</Text>
        </View>
        <View style={styles.btnContainer}>
          <AppButton  onPress={() => navigation.navigate('Login')}>Se connecter</AppButton>
          <AppButton >S'inscrire</AppButton>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    tagLine: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingVertical: 5,
      color: '#9091FE'
    },
    btnContainer: {
      padding: 20,
      width: '100%'
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