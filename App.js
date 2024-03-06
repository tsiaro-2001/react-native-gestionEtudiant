import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from "./Components/Icon";
import Etudiant from "./Components/Etudiant";
import PostEtudiant from "./Components/PostEtudiant";
import colors from "./config/colors";
import UpdateEtudiant from "./Components/UpdateEtudiant";
import LoginScreen from './Components/LoginScreen';
import Welcome from './Components/Welcome';


const Stack = createStackNavigator()

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false}}  name='Post' component={ PostEtudiant} />
    <Stack.Screen  name='Etudiant' component={ Etudiant} />
    <Stack.Screen  name='Update' component={ UpdateEtudiant} />   
    <Stack.Screen options={{ headerShown: false}} name='Login' component={ LoginScreen} />     
  </Stack.Navigator>
)
const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen options={{ headerShown: false,  tabBarIcon: () => (<Icon name='home' size='50' color={colors.primary} />)  }} name="Welcome" component={ Welcome } />
    <Tab.Screen options={{   tabBarIcon: () => (<Icon name='apps' size='50' color={colors.primary} />) }}  name="Ajout" component={ Navigation} />
    <Tab.Screen options={{   tabBarIcon: () => (<Icon name='filter-variant' size='50' color={colors.primary} />) }}  name="List" component={ Etudiant } />
  </Tab.Navigator>
)
export default function App() {

  return (
  
  <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

