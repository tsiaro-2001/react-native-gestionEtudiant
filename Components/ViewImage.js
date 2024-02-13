import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const ViewImage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.closeIcon}>
                <Icon name='close' size={30} />
            </View>
            <View style={styles.reduitIcon}>
                <Icon name='trash-can-outline' size={30}/>
            </View>
        </View>

        <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    closeIcon: {
        // position: 'absolute',
        top: 40,
        left: 10
    },
    reduitIcon: {
       
        // position: 'absolute',
        top: 40,
        right: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImage