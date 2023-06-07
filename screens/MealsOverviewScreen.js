import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy";
import { FlatList } from "react-native";
import { MealItem } from "../components/MealItem";

export const MealsOverviewScreen = ({ route }) => {
  const categoryID = route.params.categoryId;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  });

  function renderMeal(mealData) {
    return (
      <MealItem
        id={mealData.item.id}
        title={mealData.item.title}
        imageUrl={mealData.item.imageUrl}
        duration={mealData.item.duration}
        complexity={mealData.item.complexity}
        affordability={mealData.item.affordability}
      />
    );
  }

  return (
    <View style={STYLES.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMeal}
      />
    </View>
  );
};

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
