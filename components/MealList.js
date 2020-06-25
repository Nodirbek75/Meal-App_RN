import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  const renderMeal = (itemData) => {
    const isFavourite = favMeals.some((meal) => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavourite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        style={{ width: "100%" }}
        renderItem={renderMeal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
