import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '../config/colors'

const ListItemUpdate = ({onPress}) => {
    
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <View style={styles.rightComponent}>
         <Icon style={styles.icon} name='checkbox-outline' color={colors.primary} size={30} />
        </View>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
    rightComponent: {
      width: 70,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {    
     
    }
  })

export default ListItemUpdate