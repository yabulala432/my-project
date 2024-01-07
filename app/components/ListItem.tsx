import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";

interface ListItemProps {
  IconComponent?: any;
  title: string;
  subtitle?: string;
  onPress?: any;
  style?: any;
  titleStyle?: any;
}

function ListItem({
  IconComponent,
  title,
  subtitle,
  onPress,
  titleStyle = {},
  style = {},
}: ListItemProps) {
  const [underlayColor, setUnderlayColor] = useState("#FEDCBA");
  return (
    <TouchableHighlight underlayColor={underlayColor} onPress={onPress}>
      <View style={[styles.container, style]}>
        {IconComponent}
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 27,
    padding: 10,
  },
  imageContainer: {
    paddingHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "900",
    color: "#6e6969",
  },
  subtitle: {
    fontSize: 14,
    color: "#6e6969",
    alignSelf: "flex-start",
  },
});

export default ListItem;
