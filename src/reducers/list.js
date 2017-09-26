import * as constants from '../constants';

const initialState = {
  1: [],
  2: [],
  3: []
}

export function list(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_TEXT: {
      const {category, text} = action;
      console.log(category, text, state)
      state[category] = [...state[category], text]
      return {
        ...state,
      };
    }
    // case constants.SET_CATEGORY: {
    //   const {category} = action
    //   return {
    //     ...state,
    //     category
    //   }
    // }
    default:
      return state
  }
}