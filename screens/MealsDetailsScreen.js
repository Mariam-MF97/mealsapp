import { Text, View, Image } from "react-native";
import { MEALS } from "../data/dummy";
import { MealDetails } from "../components/MealDetails";
import { StyleSheet } from "react-native";
import { List } from "../components/List";
import { ScrollView } from "react-native";
export const MealsDetailsScreen = ({ route }) => {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => {
    return meal.id == mealID;
  });

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={STYLES.image} />
      <Text style={STYLES.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={STYLES.ContentOuter}>
        <View style={STYLES.contentInner}>
          <View style={STYLES.subtitleContainer}>
            <Text style={STYLES.subtitle}>Ingredients</Text>
          </View>
          <List data={selectedMeal.ingredients} />
          <View style={STYLES.subtitleContainer}>
            <Text style={STYLES.subtitle}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const STYLES = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontFamily: "montserrat-bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "montserrat-bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 4,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  contentInner: {
    width: "90%",
  },
  ContentOuter: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
