import { SafeAreaView } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy";
import { FlatList } from "react-native";

export const CategoriesScreen = ({ navigation }) => {
  function renderCategory(categoryData) {
    function handlePressOnCategory() {
      navigation.navigate("MealsOverview", {
        categoryId: categoryData.item.id,
        categoryTitle: categoryData.item.title,
      });
    }
    return (
      <CategoryGridTile
        title={categoryData.item.title}
        color={categoryData.item.color}
        onPress={handlePressOnCategory}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCategory}
      numColumns={2}
    />
  );
};
