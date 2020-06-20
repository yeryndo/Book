import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import NotificationsScreen from "./screens/NotificationScreen";
import SellScreen from "./screens/SellScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style = {styles.container}>
        <Header />

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name=" Sell" component={SellScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  }
});

