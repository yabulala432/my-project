import React from "react";
import { View, StyleSheet, Platform } from "react-native";

interface props {
  children: any;
  style?: any;
}

const Screen = ({ children, style = {} }: props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
  },
});

export default Screen;
