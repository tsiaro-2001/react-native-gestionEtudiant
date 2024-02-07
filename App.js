import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Alert, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('texte cliker');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>App with my best!</Text>
      <SafeAreaView>
        <Button title='Add' color="orange" onPress={() => Alert.alert("Informations", "Button appuyer", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "How"},
          {text: "No"},
        ])} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
