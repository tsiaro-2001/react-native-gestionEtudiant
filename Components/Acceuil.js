import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Card from './Card'

const produits = [
  {
    title: 'Jacket',
    subTitle: '100$',
    image: require('../assets/jacket.jpg') 
  },
  {
    title: 'Chaise',
    subTitle: '100$',
    image: require('../assets/couch.jpg') 
  },
]

const Acceuil = () => {
  return (
    <View style={styles.container} >
      <FlatList
       data={produits}
       keyExtractor={it => it.title}
       renderItem={({item}) => 
        <Card title={item.title} subTitle={item.subTitle} image={item.image} />
      }
      />
        {/* <Card title='Jacket' subTitle='100$' image={require('../assets/jacket.jpg')} /> */}
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