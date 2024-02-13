import React from 'react'
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

const ListItem = ({title, subTitle, image, onPress}) => {
  return (
    <TouchableHighlight 
      onPress={onPress}
      underlayColor={colors.light}

    
    >
      <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.subCont}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText>{subTitle}</AppText>
          </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 10
  },
  subCont: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default ListItem