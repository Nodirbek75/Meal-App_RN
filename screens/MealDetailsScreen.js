import React, {useEffect, useCallback} from "react";
import { useSelector, useDispatch} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from '../constants/colors';
import { toggleFavourite } from '../store/action/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availabaleMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availabaleMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch()

  const toggleFav = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFav});
  }, [toggleFav]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>INGREDIENTS</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>STEPS</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={"favourite"}
          iconName={"ios-heart"}
          iconSize={23}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: Dimensions.get("screen").height / 4,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    padding: 10,
    color: Platform.OS === "android" ? Colors.primary : "black"
  },
  listItem:{
    marginVertical: 5,
    marginHorizontal: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingLeft: 10
  }
});

export default MealDetailsScreen;
