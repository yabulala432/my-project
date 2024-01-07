import React from "react";
import { Dimensions, Image, View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const HomeScreen = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Screen style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <AppText color={colors.tertiary} style={{ fontSize: 50 }}>
              Routes
            </AppText>
          </View>
          <View style={styles.listContainer}>
            <ListItem
              style={{
                backgroundColor: colors.lightTeritiary,
                borderRadius: 15,
                height: 50,
                margin: 10,
                paddingHorizontal: 20,
              }}
              IconComponent={
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome
                    name="location-arrow"
                    size={30}
                    color={colors.white}
                  />
                </View>
              }
              title="My Location"
              titleStyle={{
                color: colors.white,
                fontSize: 20,
                fontWeight: "normal",
              }}
            />
          </View>
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
  innerContainer: {
    borderRadius: 10,
  },
  listContainer: {},
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
