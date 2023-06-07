import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
export const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={STYLES.info}>
      <View style={STYLES.infoOuter}>
        <Text style={STYLES.itemInfo}>
          <Text style={STYLES.nestedText}>Duration </Text>
          {duration}
        </Text>
        <Text style={STYLES.itemInfo}>
          <Text style={STYLES.nestedText}>Complexity </Text>
          {complexity.toUpperCase()}
        </Text>
      </View>
      <Text style={STYLES.itemInfo}>
        <Text style={STYLES.nestedText}>Affordability </Text>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const STYLES = StyleSheet.create({
  info: {
    // flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:10
  },
  infoOuter: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemInfo: {
    marginHorizontal: 4,
    fontFamily: "montserrat-regular",
    fontSize: 14,
    backgroundColor: "#eeee",
    padding:10,
    borderRadius:10
  },
  nestedText: {
    fontFamily: "montserrat-bold",
    color: "#654ea3",
  },
});
