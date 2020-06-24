import { MEALS } from '../../data/dummy-data';

const initState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoureMeals: [],
}

const mealReducer = (state = initState, action) => {
    return state;
}

export default mealReducer;