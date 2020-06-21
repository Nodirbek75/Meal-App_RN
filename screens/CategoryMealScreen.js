import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMeal = (itemData) => {
    console.log(itemData);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate('MealDetails', {mealId: itemData.item.id})
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={selectedMeals}
        style={{ width: "100%" }}
        renderItem={renderMeal}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
});

export default CategoryMealScreen;
