import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Screen from './Screen'
import ListItem from './ListItem'
import Icon from './Icon'
import colors from '../config/colors'
import ListItemSeparator from './ListItemSeparator'

const list = [
    {
        title: 'My Listing',
        icon: {
            name: 'format-list-bulleted',     
            backgroundColor: colors.primary ,
        }
    },
    {
        title: 'My message',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary ,
        }
    },
  
    
]

const AccountScreen = () => {
  return ( 
        <View style={styles.container}>
            <Screen>
                <ListItem image={require('../assets/mosh.jpg')} title={'Tsiaro hifa'} subTitle={'Dev React Native'}  />
            </Screen>
            <Screen>
                <FlatList
                    data={list}
                    keyExtractor={list => list.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) =>
                        <ListItem ImageComponent={<Icon name={item.icon.name} size={50} color={colors.white} backgroundColor={item.icon.backgroundColor}/>} title={item.title}  /> 
                        }
                />
            </Screen> 
            <Screen>
            <ListItem ImageComponent={<Icon name='logout' size={50} color={colors.white} backgroundColor={colors.yellow}/>} title={'Log out'}  />
            </Screen>
        </View>      
  
         
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: 1
    }
  
})


export default AccountScreen