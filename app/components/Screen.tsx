import React from "react";
import { View, StyleSheet, Platform, ScrollView } from "react-native";
import colors from "../config/colors";

interface props {
  children: any;
  style?: any;
}

const Screen = ({ children, style = {} }: props) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
  },
});

export default Screen;
