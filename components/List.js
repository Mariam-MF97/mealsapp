import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export const List = ({ data }) => {
  return data.map((dataItem) => (
    <View style={STYLES.listItem} key={dataItem}>
      <Text style={STYLES.itemText}>{dataItem}</Text>
    </View>
  ));
};

const STYLES = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "white",
  },
  itemText: {
    textAlign: "center",
    fontFamily: "montserrat-regular",
    fontSize: 14,
  },
});
