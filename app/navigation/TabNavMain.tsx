import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ScreenNames from "./ScreenNames";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const TabNavMain = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavMain;
