import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Screen style={styles.container}>
        <View style={styles.textInput}>
          <AppTextInput placeholder="Search for a route" icon="magnify" />
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  textInput: {
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
});

export default HomeScreen;
