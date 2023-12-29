import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

interface props {
  icon?: any;
  rightIcon?: any;
  onPressRightIcon?: any;
  onChangeText?: any;
  placeholder?: string;
  numberOfLines?: number;
  textAlignVertical?: any;
  textBreakStrategy?: any;
  underlineColorAndroid?: any;
  secureTextEntry?: boolean;
}

function AppTextInput({
  icon,
  rightIcon,
  onPressRightIcon,
  onChangeText,
  placeholder,
  numberOfLines = 1,
  textAlignVertical,
  textBreakStrategy,
  underlineColorAndroid,
  secureTextEntry,
}: props) {
  return (
    <View style={styles.textInputContainer}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={25} color={"#6e6969"} />
      )}
      <TextInput
        numberOfLines={numberOfLines}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        textAlignVertical={textAlignVertical}
        textBreakStrategy={textBreakStrategy}
        underlineColorAndroid={underlineColorAndroid}
        secureTextEntry={secureTextEntry ? true : false}
      />
      {rightIcon && (
        <TouchableOpacity style={styles.rightIcon} onPress={onPressRightIcon}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={25}
            color={"#6e6969"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "transparent",
    borderColor: colors.grey,
    borderBottomWidth: 1,
    // borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 5,
    // paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    marginLeft: 10,
    overflow: "scroll",
    width: "80%",
  },
  rightIcon: {
    position: "absolute",
    right: "5%",
  },
  titleContainer: {
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
});

export default AppTextInput;
