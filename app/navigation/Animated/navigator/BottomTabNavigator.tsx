import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../../screens/HomeScreen";
import Route from "../../../screens/Route";
import CustomBottomTab from "../components/CustomBottomTab";
import Profile from "../../../screens/Profile";
import Alerts from "../../../screens/Alerts";

import ScreenNames from "../../ScreenNames";

export type BottomTabParamList = {
  Home: undefined;
  Routes: undefined;
  Alerts: undefined;
  Profile: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          elevation: 0,
          borderTopWidth: 0,
        },
        // sticky: true,
      }}
    >
      <Tab.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.ROUTES} component={Route} />
      <Tab.Screen name={ScreenNames.ALERTS} component={Alerts} />
      <Tab.Screen name={ScreenNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
