import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../action/meals";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
        console.log(action.mealId);
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
        console.log(existingIndex);
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const favMeal = state.meals.find((meal) => meal.id === action.mealId);
        console.log(favMeal)
        return { ...state, favouriteMeals: state.favouriteMeals.concat(favMeal) };
      }
    }
    default:
      return state;
  }
};

export default mealReducer;
