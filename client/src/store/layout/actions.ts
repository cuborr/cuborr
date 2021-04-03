import { OPEN_MODAL, CLOSE_MODAL, SET_PROMPT, ILayoutActionTypes, IPromptState, IAlertState, SET_ALERT } from './types';

export function openModal(content: JSX.Element): ILayoutActionTypes {
  return {
    type: OPEN_MODAL,
    payload: content,
  };
}

export function closeModal(): ILayoutActionTypes {
  return { type: CLOSE_MODAL };
}

export function setPrompt(prompt?: IPromptState): ILayoutActionTypes {
  console.log('Prompt:')
  console.log(prompt)
  return {
    type: SET_PROMPT,
    payload: prompt,
  }
}


export function setAlert(alert?: IAlertState): ILayoutActionTypes {
  console.log('Alert:')
  console.log(alert)
  return {
    type: SET_ALERT,
    payload: alert,
  }
}
