import React from "react";
import { Dimensions, Image, View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const Route = () => {
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
          <View style={styles.imageContainer}>
            <Image
              style={{
                width: width,
                height: height * 0.7,
                resizeMode: "stretch",
                borderBottomLeftRadius: 0,
              }}
              source={require("../designs/buss_map.png")}
            />
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.titleContainer}>
              <AppText
                color={colors.tertiary}
                style={{ fontSize: 20, fontWeight: "bold" }}
              >
                213 Mali Street - From Addisu Gebeya to Megenagna
              </AppText>
            </View>
            <View style={styles.boxify}>
              <ListItem
                title="Bus - 07"
                subtitle="23 kms away from you"
                IconComponent={
                  <MaterialCommunityIcons
                    name="bus-marker"
                    size={60}
                    color={colors.tertiary}
                  />
                }
              />
              <ListItem
                title="Driver"
                subtitle="Yeabsira Yonas "
                IconComponent={
                  <FontAwesome
                    name="drivers-license-o"
                    size={60}
                    color={colors.tertiary}
                  />
                }
              />
            </View>
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
  inputsContainer: {
    paddingHorizontal: 20,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: colors.tertiary,
    borderRadius: 50,
    height: 55,
    width: "100%",
  },
  informationContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  boxify: {
    alignItems: "flex-start",
    width: "100%",
  },
});

export default Route;
