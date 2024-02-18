import React from 'react'
import Screen from './Screen'
import { Platform, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'


const InputText = ({placeholder, nameIcon}) => {
  return (   
    <Screen>
        <View style={styles.container}>
          {nameIcon && <Icon size={30} color={colors.light} backgroundColor={colors.primary} name={nameIcon}/>}  
          <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    </Screen> 
           
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.danger,
    borderRadius: 20,
    margin: 10
  },
  input: {
    color: colors.light,
    textDecorationLine: 'none',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir '
  }
})

export default InputText