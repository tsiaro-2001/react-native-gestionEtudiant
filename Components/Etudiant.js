import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';
import Screen from './Screen';
import ListItemSeparator from './ListItemSeparator';
import ListItemDelete from './ListItemDelete';
import axios from 'axios';
import ListItemUpdate from './ListItemUpdate';
import colors from '../config/colors';
import api from '../api/api';

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


const Etudiant = ({navigation}) => {
  const [et, setEt] = useState([]);
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [total, setTotal] = useState(0)
  const [val , setval] = useState({})


  useEffect(() => {
    loadingData();
    
  }, [min]);

  const loadingData = async () => {
    const response = await axios.get(`${api.url}/getEtudiant`);
    setEt(response.data);
    console.log(et);

    const minBourse = et.reduce((min, current) => (current.bourse < min ? current.bourse : min), Infinity);
    const maxBourse = et.reduce((max, current) => (current.bourse > max ? current.bourse : max), -Infinity);
    // const totalBourse = et.reduce((sum, current) => sum + current.bourse, 0);
    // const totalBourse = et.map(Etudiant => { const res = 0; console.log(res+=Etudiant.bourse); } )
    let totalBourse = 0;

    for (const item of et) {
      totalBourse += item.bourse;
    }
    setMin(minBourse)
    setMax(maxBourse)
    setTotal(totalBourse)
    
    // const min = et.map((etudiant) => {
    //     Math.min(etudiant.bourse) ;
    //   })
    
  };

  const handleDelete = (item) => {
    Alert.alert("Attention", "Voulez vous supprimer", [
        {text: "Yes", onPress: () => { 
            axios.delete(`${api.url}/delete/${item.matricule}`)
            const updatedEt = et.pop()
            setEt(updatedEt)
            navigation.push('Etudiant')
            }},
        {text: "No"},
      ])
    
  };


  const handleEdit = (item) => {
    // Handle the edit action for the item
    console.log('Edit pressed for item:', item);
  };

  return (
    <Screen>
      <TableHeader />
      <FlatList
        data={et}
        keyExtractor={(item) => item.matricule}
        renderItem={({ item }) => (
          <ListItem
            renderRight={() => (
              <>
                <ListItemUpdate onPress={() => { navigation.navigate('Update', {matricule: item.matricule})} }/>
                <ListItemDelete onPress={() => handleDelete(item)} />
              </>
            )}
            onPress={() => console.log('item pressed', item)}
            matricule={item.matricule}
            nom={item.nom}
            prenom={item.prenom}
            bourse={item.bourse}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <View style={styles.subCont}>
        <Text style={styles.textcalcul}>min: {min} Ar </Text>
        <Text style={styles.textcalcul}>max: {max} Ar</Text>
        <Text style={styles.textcalcul}>total: {total} Ar</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: 'yellow', // Customize the color as needed
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    color: 'white'
  },
  tableRow: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',

  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.light,
    backgroundColor: colors.primary,

    
  },
  subCont: {
    alignItems: 'flex-end',
    padding: 10
    
    
  },
  textcalcul: {
    padding: 1,
    marginLeft: 10,
    fontSize: 15
    
  },
});

export default Etudiant;
