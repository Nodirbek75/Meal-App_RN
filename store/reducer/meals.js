import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../action/meals";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const favMeal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(favMeal) };
      }
    }
    case SET_FILTERS: {
      const filters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if(filters.glutenFree && !meal.isGlutenFree){
          return false;
        }
        if(filters.lactosFree && !meal.isLactoseFree){
          return false;
        }
        if(filters.vegan && !meal.isVegan){
          return false;
        }
        if(filters.vegetarian && !meal.isVegetarien){
          return false;
        }
        return true;
      })
      return {...state, filteredMeals: updatedFilteredMeals}
    }
    default:
      return state;
  }
};

export default mealReducer;
