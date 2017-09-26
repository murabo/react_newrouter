
import * as constants from '../constants';

const initialState = {
  text: '',
  category: 1,
  count: 140
}

export function input(state = initialState, action) {
  switch (action.type) {
    case constants.SET_TEXT: {
      const {text} = action
      return {
        ...state,
        text,
        count: 140-text.length
      };
    }
    case constants.SAVE_TEXT: {
      const {is_saved} = action
      return {
        ...state,
        text: '',
        count: 140,
        is_saved
      }
    }
    case constants.SET_IS_SAVED: {
      return {
        ...state,
        is_saved: true
      }
    }
    case constants.CLOSE_DIALOG: {
      return {
        text: '',
        is_saved: false,
        category: 1
      }
    }
    case constants.SET_CATEGORY: {
      const {category} = action
      return {
        ...state,
        category
      }
    }
    default:
      return state
  }
}