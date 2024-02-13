import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import ListItem from './ListItem'

const ListingDetails = ({title, subTitle, image}) => {
   
  return (
    <View style={styles.cardContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsCont}>
            <Text style={styles.texte}>{title}</Text>
            <Text style={[styles.texte, {color: 'blue'}]}>{subTitle}</Text>
            <ListItem title={'fsdfds'} subTitle={'skjlslj'} image={require('../assets/mosh.jpg')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: colors.white,
        marginBottom: 10,
        overflow: 'hidden',
    },
    detailsCont: {
        padding: 20,
    },
    texte: {
        fontSize: 15 ,
        fontWeight: 'bold',
        marginBottom: 2
    },
    image: {
        width: '100%' ,
        height: 150 ,
        paddingTop: 50,

    }
})


export default ListingDetails