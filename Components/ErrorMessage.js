import React from 'react'
import { StyleSheet } from 'react-native'
import AppText from './AppText/AppText'

const ErrorMessage = ({children, visible}) => {
    if (!visible || !children) return null  

    return (
        <AppText style={styles.text}>{ children }</AppText>
   )
}

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
})

export default ErrorMessage