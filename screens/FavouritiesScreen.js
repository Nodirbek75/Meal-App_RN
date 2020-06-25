import React from "react";
import { View, StyleSheet} from 'react-native';
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from '../components/DefaultText'

const FavouritiesScreen = (props) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default FavouritiesScreen;
