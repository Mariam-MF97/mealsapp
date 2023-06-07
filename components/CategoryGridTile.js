import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Pressable } from "react-native";

export const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[STYLES.categoryItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          STYLES.pressable,
          pressed ? STYLES.categoryPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={STYLES.detailsContainer}>
          <Text style={STYLES.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const STYLES = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowColor: "black",
    backgroundColor: "white",
    overflow: "hidden",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  pressable: {
    flex: 1,
  },
  categoryPressed: {
    opacity: 0.5,
  },
  title: {
    fontFamily: "montserrat-bold",
    fontSize: 18,
    color: "white",
  },
});
