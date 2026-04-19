import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import Number from './screens/Number';
import Verification from './screens/Verification';
import Location from './screens/Location';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import ProductDetail from './screens/ProductDetail';
import Explore from './screens/Explore';
import Beverage from './screens/Beverage';
import Search from './screens/Search';
import Cart from './screens/Cart';
import Favourite from './screens/Favourite';
import Filter from './screens/Filter';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4CAF6A',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="heart" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={22} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Beverage" component={Beverage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}