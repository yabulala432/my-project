import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const HomeScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        flex: 1,
      }}
    >
      <MapView
        style={{
          height: "80%",
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%",
        }}
        initialRegion={{
          latitude: 37.78825,
          latitudeDelta: 0.05,
          longitude: -122.4324,
          longitudeDelta: 0.05,
        }}
      ></MapView>

      <View
        style={{
          position: "absolute",
          top: 45,
          width: "75%",
          height: 55,
          backgroundColor: colors.white,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        <AppTextInput placeholder="Search for a Route" icon={"magnify"} />
      </View>

      <Screen
        style={{
          backgroundColor: colors.white,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <View>
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
                  size={45}
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
                  size={45}
                  color={colors.tertiary}
                />
              }
            />
          </View>
        </View>
      </Screen>
    </View>
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
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  boxify: {
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 10,
  },
});

export default HomeScreen;
