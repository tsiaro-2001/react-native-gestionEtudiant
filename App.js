// import { Button, Text } from "react-native";
// import Screen from "./Components/Screen";

// import {NavigationContainer} from '@react-navigation/native'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from "./Components/LoginScreen";

// const Tweets = () => (
//   <Screen>
//     <Text>Tweets</Text>
//   </Screen>
// )

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// )

// const Tab = createBottomTabNavigator()
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={ Tweets} />
//     <Tab.Screen name="Account" component={ Account } />
//   </Tab.Navigator>
// )
export default function App() {

  return (
    <LoginScreen />
  //  <NavigationContainer>
  //   <TabNavigator />
  //  </NavigationContainer>
  );
}

