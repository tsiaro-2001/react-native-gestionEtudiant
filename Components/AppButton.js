import React from 'react'
import { StyleSheet, Text} from 'react-native'
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native'

const AppButton = ({children, color = 'primary' ,onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: colors[color]} ] } onPress={onPress}> 
       <Text style={styles.text}> {children}</Text>  
    </TouchableOpacity>
   
  )
} 

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
    borderRadius:25,
    margin: 4
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    // textTransform: 'uppercase'
  }
})


export default AppButton