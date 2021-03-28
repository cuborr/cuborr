import { LayoutState, LayoutActionTypes, OPEN_MODAL, CLOSE_MODAL } from './types';

const initialState: LayoutState = {
  modalIsVisible: false,
  modalContent: null,
};

export function layoutReducer(state = initialState, action: LayoutActionTypes): LayoutState {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modalIsVisible: true,
        modalContent: action.payload,
      };
    }
    case CLOSE_MODAL: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
