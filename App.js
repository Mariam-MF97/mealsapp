import { useFonts } from "expo-font";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealsDetailsScreen } from "./screens/MealsDetailsScreen";

export default function App() {
  const [loaded] = useFonts({
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const STACK = createNativeStackNavigator();
  return (
    <LinearGradient colors={["#654ea3", "#eaafc8"]} style={styles.gradient}>
      <StatusBar style="light" />
      <NavigationContainer>
        <STACK.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#eaafc8",
            },
            headerTitleStyle: {
              fontFamily: "montserrat-bold",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: LinearGradient,
            },
          }}
        >
          <STACK.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <STACK.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navogarion }) => {
              const categoryID = route.params.categoryId;
              const categoryTitle = route.params.categoryTitle;

              return {
                title: categoryTitle,
              };
            }}
          />
          <STACK.Screen
            name="MealDetails"
            component={MealsDetailsScreen}
            options={{
              title: "Meal Details",
            }}
          />
        </STACK.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
