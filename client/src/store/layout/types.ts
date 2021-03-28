export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface LayoutState {
  modalIsVisible: boolean;
  modalContent: JSX.Element | null;
}

interface OpenModalAction {
  type: typeof OPEN_MODAL;
  payload: JSX.Element;
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
}

export type LayoutActionTypes = OpenModalAction | CloseModalAction;

export interface LayoutActionProps {
  openModal: (payload: JSX.Element) => LayoutActionTypes;
  closeModal: () => LayoutActionTypes;
}
