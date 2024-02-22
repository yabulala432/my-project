import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Alerts from "../screens/Alerts";
import colors from "../config/colors";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Route from "../screens/Route";
import ScreenNames from "./ScreenNames";

const Tab = createBottomTabNavigator();
const TabNavMain = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 1,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          elevation: 0,
          height: 60,
          shadowRadius: 2,
          start: 0,
          width: "95%",
          alignSelf: "center",
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name={ScreenNames.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size * 1.3}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.ROUTES}
        component={Route}
        options={{
          tabBarLabel: "Routes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="directions"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.ALERTS}
        component={Alerts}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell"
              color={color}
              size={size * 1.3}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size * 1.3}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavMain;
