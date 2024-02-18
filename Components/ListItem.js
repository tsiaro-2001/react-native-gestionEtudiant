import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItem = ({title, subTitle, image, ImageComponent, onPress, renderRight}) => {
  return (
    <GestureHandlerRootView>
       <Swipeable renderRightActions={renderRight}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
        <View style={styles.container}>
          {ImageComponent}
           {image && <Image style={styles.image} source={image} />} 
            <View style={styles.subCont}>
                <AppText style={styles.title}>{title}</AppText>
               {subTitle && <AppText>{subTitle}</AppText>} 
            </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
   
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
    // marginTop: 20,
    paddingLeft: 10,
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: 20 
  },
  subCont: {
    justifyContent: 'center',
    marginLeft: 5
  }
})


export default ListItem