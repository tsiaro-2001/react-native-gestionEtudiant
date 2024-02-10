import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={{backgroundColor: "red", flex:1, flexDirection:'row'}}>
      <View style={{backgroundColor: "dodgerblue", flex:2}} />
      <View style={{backgroundColor: "orange", flex:1}} />
      <View style={{backgroundColor: "red", flex:1}} />
    </View>
  );
}

