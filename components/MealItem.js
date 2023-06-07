import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { View, Text, Pressable, Image } from "react-native";
import { MealDetails } from "./MealDetails";

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  function handleSelectMeal() {
    navigation.navigate("MealDetails", {
      mealID: id,
    });
  }
  return (
    <View style={STYLES.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? STYLES.itemPressed : null)}
        onPress={handleSelectMeal}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={STYLES.image} />
          <Text style={STYLES.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

const STYLES = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "montserrat-bold",
    textAlign: "center",
    fontSize: 18,
    // margin: 8,
    marginTop:10
  },
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  info: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemInfo: {
    marginHorizontal: 4,
    fontFamily: "montserrat-regular",
    fontSize: 14,
  },
  itemPressed: {
    opacity: 0.5,
  },
});
