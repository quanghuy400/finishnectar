import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StorageService } from './services/storageService';
import { CartProvider } from './context/CartContext';     
import { OrderProvider } from './context/OrderContext';   

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
import Filter from './screens/Filter';
import Cart from './screens/Cart';
import Favourite from './screens/Favourite';
import Orders from './screens/Orders';
import Account from './screens/Account';

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
      <Tab.Screen name="Shop" component={Home}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} /> }}
      />
      <Tab.Screen name="Explore" component={Explore}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="search" size={22} color={color} /> }}
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="cart" size={22} color={color} /> }}
      />
      <Tab.Screen name="Favourite" component={Favourite}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="heart" size={22} color={color} /> }}
      />
      <Tab.Screen name="Account" component={Account}
        options={{ tabBarIcon: ({ color }) => <Ionicons name="person" size={22} color={color} /> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const user = await StorageService.getUser();
        setInitialRoute(user ? 'MainTab' : 'Splash');
      } catch (e) {
        setInitialRoute('Splash');
      }
    };
    checkLogin();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4CAF6A" />
      </View>
    );
  }

  return (
    <CartProvider>        
      <OrderProvider>     
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{ headerShown: false }}
          >
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
            <Stack.Screen name="Orders" component={Orders} />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderProvider>
    </CartProvider>
  );
}