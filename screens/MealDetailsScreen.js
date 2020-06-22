import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from '../constants/colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
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

MealDetailsScreen.navigationOptions = (neavigationData) => {
  const mealId = neavigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={"favourite"}
          iconName={"ios-heart"}
          iconSize={23}
          onPress={() => console.log("Favourite")}
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
