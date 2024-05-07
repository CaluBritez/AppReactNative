import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen.js';
import DogsScreen from './screens/DogsScreen.js';
import CatsScreen from './screens/CatsScreen.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName='HomeScreen'>

      <HomeStackNavigator.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} 
      />

      <HomeStackNavigator.Screen 
        name="Dogs"
        component={DogsScreen}
        options={{ headerBackTitleVisible: false }} 
      />
      <HomeStackNavigator.Screen 
        name="Cats"
        component={CatsScreen}
        options={{ headerBackTitleVisible: false }} 
      />

    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: 'tomato',}}>
      <Tab.Screen 
        name="Home" 
        component={MyStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />  
      <Tab.Screen 
        name="Dogs" 
        component={DogsScreen}
        options={{
          tabBarLabel: 'Dogs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />
      <Tab.Screen 
        name="Cats" 
        component={CatsScreen}
        options={{
          tabBarLabel: 'Cats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
          ),
          headerShown: false
        }} 
      />
      

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}