import React from 'react'
import { FlatList} from 'react-native'
import ListItem from './ListItem'
import Constants  from 'expo-constants'
import Screen from './Screen'
import ListItemSeparator from './ListItemSeparator'

console.log(Constants);
const message = [
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
  return (
    <Screen>
        <FlatList 
            data={message} 
            keyExtractor={message => message.id.toString()}
            renderItem={
                ({item}) => <ListItem onPress={() => console.log('item presse', item)} title={item.title} subTitle={item.subtitle} image={item.image} /> 
            } 

            ItemSeparatorComponent={ListItemSeparator}
        
        /> 
    </Screen>
  )
}


export default MessageScreen