import React from 'react'
import { StyleSheet, View } from 'react-native'
import Card from './Card'

const Acceuil = () => {
  return (
    <View style={styles.container} >
        <Card title='Jacket' subTitle='100$' image='chair.jpg' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 70, 
    flex: 1,
  }
})


export default Acceuil