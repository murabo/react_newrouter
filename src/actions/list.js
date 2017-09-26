
import * as constants from '../constants';

export function addText(text, category) {
  return {
    type: constants.ADD_TEXT,
    text,
    category
  }
}

export function setCategory(id, evt, key, payload) {
  return {
    type: constants.SET_CATEGORY,
    category: key
  }
}