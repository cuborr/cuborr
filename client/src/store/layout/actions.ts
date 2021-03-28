import { OPEN_MODAL, CLOSE_MODAL, LayoutActionTypes } from './types';

export function openModal(content: JSX.Element): LayoutActionTypes {
  return {
    type: OPEN_MODAL,
    payload: content,
  };
}

export function closeModal(): LayoutActionTypes {
  return { type: CLOSE_MODAL };
}
