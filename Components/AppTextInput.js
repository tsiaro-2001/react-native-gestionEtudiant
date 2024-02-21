import React, { useState } from 'react'
import { Modal, Platform, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'


const AppTextInput = ({placeholder, nameIcon, ...otherProps}) => {
  
  return (    
  <>  
      <View style={styles.container}>
        {nameIcon && <Icon size={30} color={colors.primary} backgroundColor={colors.light} name={nameIcon}/>}  
        <TextInput {...otherProps} style={styles.input} placeholder={placeholder} />
      </View>  
  </>      
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
    margin: 10
  },
  input: {
    // color: colors.light,
    textDecorationLine: 'none',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir '
  }
})

export default AppTextInput