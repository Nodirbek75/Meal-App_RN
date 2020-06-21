import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={{ ...styles.mealRow, ...styles.mealTitle }}>
          <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 15,
    shadowColor: "black",
  
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title:{
      fontFamily: "open-sans-bold",
      color: "white",
      fontSize: 20,
      backgroundColor: "rgba(0,0,0,.5)",
      textAlign: "center",
      paddingHorizontal: 30,
      paddingVertical: 5
  },
  mealRow: {
    flexDirection: "row",
  },
  mealTitle: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
});

export default MealItem;
