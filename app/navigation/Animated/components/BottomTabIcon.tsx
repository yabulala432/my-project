import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenNames from "../../ScreenNames";

import colors from "../../../config/colors";

interface Props {
  route: any;
  isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    switch (route) {
      case ScreenNames.HOME: {
        return (
          <MaterialCommunityIcons
            name="home"
            size={isFocused ? width * 1.1 : width}
            color={isFocused ? colors.primary : "white"}
          />
        );
      }
      case ScreenNames.ROUTES:
        return (
          <MaterialCommunityIcons
            name="map-legend"
            size={isFocused ? width * 1.1 : width}
            color={isFocused ? colors.primary : "white"}
          />
        );
      case ScreenNames.ALERTS:
        return (
          <MaterialCommunityIcons
            name="bell"
            size={isFocused ? width * 1.1 : width}
            color={isFocused ? colors.primary : "white"}
          />
        );
      case ScreenNames.PROFILE:
        return (
          <MaterialCommunityIcons
            name="account"
            size={isFocused ? width * 1.1 : width}
            color={isFocused ? colors.primary : "white"}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
