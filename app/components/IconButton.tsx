import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  name: any;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
  onPress?: () => void;
}

const IconButton = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  onPress,
}: IconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size - size * 0.6}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
