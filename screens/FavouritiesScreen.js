import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const FavouritiesScreen = (props) => {
  const favouriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2" || meal.id === "m3"
  );

  return <MealList listData={favouriteMeals} navigation={props.navigation} />;
};

FavouritiesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourities",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={"Menu"}
          iconName={"ios-menu"}
          iconSize={25}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavouritiesScreen;
