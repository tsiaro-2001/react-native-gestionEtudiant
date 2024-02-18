import React, { useState } from 'react'
import { FlatList, StyleSheet} from 'react-native'
import ListItem from './ListItem'
import Constants  from 'expo-constants'
import Screen from './Screen'
import ListItemSeparator from './ListItemSeparator'
import { View } from 'react-native'
import ListItemDelete from './ListItemDelete'

const messages = [
    {
        id: 1,
        title: 'Tsiaro',
        subtitle: 'Hifaliana',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Bota',
        subtitle: 'Gasy',
        image: require('../assets/mosh.jpg')
    },
]

const MessageScreen = () => {
    const [items, setItem] = useState(messages)
    const ar = ['tsiaro', 'hifaliana']
    
    const handleDelete = (item) => {
        // const copyItem = items.filter( (it) => it.id !== item.id )
        const newItem = items.pop()
        setItem(newItem)
        console.log(item);
    }
  return (
    <Screen>
        <FlatList 
            data={messages} 
            keyExtractor={message => message.id.toString()}
            renderItem={
                ({item}) => 
                    <ListItem 
                        renderRight={() => <ListItemDelete onPress={() => handleDelete(item)} />} 
                        onPress={() => console.log('item presse', item)}
                        title={item.title} subTitle={item.subtitle}
                        image={item.image} 
                    /> 
            } 

            ItemSeparatorComponent={ListItemSeparator}
        
        /> 
    </Screen>
  )
}




export default MessageScreen