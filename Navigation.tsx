import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';


import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AgregarScreen from "./screens/AgregarScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, }) => (
            <MaterialCommunityIcons
              name="bookmark-minus-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Agregar"
        component={AgregarScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ }) => (
            <FontAwesome5
              name="plus-circle"
              size={24}
              color="red"
            />
          ),
        }}

      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={color}
            />
          ),
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: " ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-cog-outline"
              size={24}
              color={color}
            />
          ),
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
