import { ILayoutState, ILayoutActionTypes, OPEN_MODAL, CLOSE_MODAL, SET_PROMPT, SET_ALERT } from './types';

const initialState: ILayoutState = {
  modalIsVisible: false,
  modalContent: null,
  prompt: undefined,
  alert: undefined,
};

export function layoutReducer(state = initialState, action: ILayoutActionTypes): ILayoutState {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modalIsVisible: true,
        modalContent: action.payload,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modalIsVisible: false,
        modalContent: null,
      };
    }
    case SET_PROMPT: {
      return {
        ...state,
        prompt: action.payload,
      };
    }
    case SET_ALERT: {
      return {
        ...state,
        alert: action.payload,
      };
    }
    default:
      return state;
  }
}
