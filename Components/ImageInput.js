import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import Screen from './Screen'
import colors from '../config/colors'

const ImageInput = () => {
    const handleDelete = () => {

    }
  return (
    <Screen style={styles.container}>
      <View style={styles.subCont}>
        <Icon size={150} name='camera' />
      </View>
        {/* <Image style={styles.img} source={{ uri: }} /> */}
    </Screen>
  )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
      // padding: 100,
      flex: 1
    },
    img : {
        width: 200,
        height: 200,
    },
    subCont: {
      // padding: 30,
      paddingVertical: 30,
      backgroundColor: colors.danger,
      borderRadius: 20
    }
})