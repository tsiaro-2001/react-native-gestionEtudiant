import React from 'react'

const Btn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>App with my best!</Text>
      <TouchableWithoutFeedback>
       <Image source={require('./assets/favicon.png')}/>
      </TouchableWithoutFeedback>
      <SafeAreaView>
        <Button title='Add' color="orange" onPress={() => Alert.alert("Informations", "Button appuyer", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "How"},
          {text: "No"},
        ])} />
      </SafeAreaView>
      <View color="orange">
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Btn
