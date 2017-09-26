import * as constants from '../constants'
import {addText} from './list';


export function setText(id, evt, key,) {
  return {
    type: constants.SET_TEXT,
    text: evt
  }
}

export function saveText(text, category) {
  return dispatch => {
    dispatch(addText(text, category))
    dispatch(setIsSaved())
  }
}

export function setIsSaved() {
  return {
    type: constants.SET_IS_SAVED,
    is_saved: true
  }
}

export function dialogClose() {
  return {
    type: constants.CLOSE_DIALOG,
    is_saved: false
  }
}

export function setCategory(id, evt, key, payload) {
  return {
    type: constants.SET_CATEGORY,
    category: key
  }
}