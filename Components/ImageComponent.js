import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageComponent = () => {
    
 const [imageUri, setImageUri] = useState([{uri: ''}])
 const permission = async () => {
  const result = await ImagePicker.requestCameraPermissionsAsync()
 if ( !result.granted)
   alert('you need to enable')
}

useEffect( () => {
 permission()
}, [])

const handlePress = async () => {
 try {
   const results = await ImagePicker.launchImageLibraryAsync()
   if ( !results.canceled)
     setImageUri([{
       ...imageUri, 
     uri: results.assets[0].uri
    }] )
   console.log(imageUri);
   
 } catch (error) {
   console.error(error);
 }
}
const handleDelete = () => {
 // alert('Voulez vous le supprimer')
 Alert.alert("Attention", "Voulez vous supprimer", [
   {text: "Oui", onPress: () => setImageUri('')},
   {text: "Non" },
 ])
}
  return (
    <View>
      <Text>ImageComponent</Text>
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({})