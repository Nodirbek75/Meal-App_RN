import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";
import DefaultText from "../components/DefaultText";
import { setFilters } from '../store/action/meals';
const FilterContainer = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactosFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>AVAILABLE FILTERS / RESTRICTIONS</Text>
      <FilterContainer
        label={"Gluten-Free"}
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterContainer
        label={"Lactos-Free"}
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterContainer
        label={"Vegan"}
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterContainer
        label={"Vegetarian"}
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filterssss",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={"Save"}
          iconName={"ios-checkmark-circle-outline"}
          iconSize={25}
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginVertical: 15
  },
});

export default FilterScreen;
