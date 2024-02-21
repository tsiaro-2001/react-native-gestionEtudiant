import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.texte}>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  texte: {
    padding: 20,
  }
})


export default PickerItem