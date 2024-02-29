import React, { useState } from 'react'
import Screen from './Screen'
import { Button, FlatList, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'
import AppText from './AppText/AppText'
import { Modal } from 'react-native'
import PickerItem from './PickerItem'


const AppPicker = ({placeholder, nameIcon, categories}) => {
   const [modalVisible, setModalVisible] = useState(false)
   const [titre, setTitre] = useState(placeholder)
  return (   
 <>
     <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            {nameIcon && <Icon size={30} color={colors.primary} backgroundColor={colors.light} name={nameIcon}/>}  
            <AppText style={styles.texte}>
                {titre}
            </AppText>
            <Icon size={30} color={colors.primary} backgroundColor={colors.light} name={'chevron-down'} /> 

        </View>
     </TouchableWithoutFeedback>   
     {modalVisible &&  <View style={styles.subContainer}>     
            {/* <Button title='Close' onPress={() => setModalVisible(false)}/> */}
            <FlatList
                data={categories} 
                keyExtractor={it => it.value.toString()}
                renderItem={({item}) => <PickerItem label={item.titre} onPress={() => {setTitre(item.titre); setModalVisible(false)} } /> }
            />  
        </View> } 
     
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
  subContainer: {
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
    // margin: 10,
    marginHorizontal: 10
  },
  texte: {
    flex: 1,
    color: colors.medium,
  },
  input: {
    color: colors.light,
    textDecorationLine: 'none',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir '
  }
})

export default AppPicker