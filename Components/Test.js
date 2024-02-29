import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {
  return (
     <Screen>
      <Button onPress={handlePress} title="Add pict" />
      <TouchableOpacity onPress={handleDelete}>
        <FlatList
         data={imageUri}
         keyExtractor={(it) => it.uri }
         renderItem={( {item}) => 
           <Image style={{width: 200, height: 200}} source={{uri: item.uri }} />
         }  
        />
      </TouchableOpacity>    
     </Screen> 
  )
}

export default Test

const styles = StyleSheet.create({})