import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TableHeader = () => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableHeaderCell}>Matricule</Text>
      <Text style={styles.tableHeaderCell}>Nom</Text>
      <Text style={styles.tableHeaderCell}>Prénom</Text>
      <Text style={styles.tableHeaderCell}>Bourse</Text>
    </View>
  );
};

const TableRow = ({ matricule, nom, prenom, bourse }) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{matricule}</Text>
      <Text style={styles.tableCell}>{nom}</Text>
      <Text style={styles.tableCell}>{prenom}</Text>
      <Text style={styles.tableCell}>{bourse}</Text>
    </View>
  );
};

const TableView = ({ data }) => {
  return (
    <View style={styles.tableView}>
      <TableHeader />
      {data.map((item, index) => (
        <TableRow key={index} {...item} />
      ))}
    </View>
  );
};




const ListItem = ({matricule, nom, prenom, image, ImageComponent, bourse,  onPress, renderRight}) => {
  return (
    <GestureHandlerRootView> 
      
       <Swipeable renderRightActions={renderRight}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
        {/* <View style={styles.container}>
          {ImageComponent}
           {image && <Image style={styles.image} source={image} />} 

            <View style={styles.subCont}>
                <AppText style={styles.title}>{matricule}</AppText>
                <AppText style={styles.title}>{nom}</AppText>
                <AppText style={styles.title}>{prenom}</AppText>
                <AppText style={styles.title}>{bourse}</AppText>
                
            </View>
        </View> */}
        <TableRow matricule={matricule} nom={nom } prenom={prenom} bourse={bourse} />
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
   
  )
}


const styles = StyleSheet.create({
  tableView: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    fontSize: 20
  },
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
    // justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 5
  }
})


export default ListItem