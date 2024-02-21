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
            {nameIcon && <Icon size={30} color={colors.light} backgroundColor={colors.primary} name={nameIcon}/>}  
            <AppText style={styles.texte}>
                {titre}
            </AppText>
            <Icon size={30} color={colors.light} backgroundColor={colors.primary} name={'chevron-down'} /> 

        </View>
     </TouchableWithoutFeedback>   
     
     <Modal animationType='slide' visible={modalVisible}>
        <Screen>     
            <Button title='Close' onPress={() => setModalVisible(false)}/>
            <FlatList
                data={categories} 
                keyExtractor={it => it.value.toString()}
                renderItem={({item}) => <PickerItem label={item.titre} onPress={() => {setTitre(item.titre); setModalVisible(false)} } /> }
            />  
        </Screen>
     </Modal>
 </>
           
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.danger,
    borderRadius: 20,
    margin: 10
  },
  texte: {
    flex: 1,
    color: colors.light
  },
  input: {
    color: colors.light,
    textDecorationLine: 'none',
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir '
  }
})

export default AppPicker