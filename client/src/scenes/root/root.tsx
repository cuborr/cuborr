import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store
import { RootState } from 'src/store';
import { closeModal } from 'src/store/layout/actions';
import { setClient, setContractor } from 'src/store/user/actions';
// assets
import { Modal } from './components/modal';
import { Prompt } from './components/prompt';
import { Alert } from './components/alert';
import { RootContainer } from './root.styles';

interface MenuProps {
  children: JSX.Element;
}

export const Root: React.FC<MenuProps> = ({ children }) => {
  // get the current route
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout);
  const { modalIsVisible, modalContent, prompt, alert } = layout;

  const onCloseModal = () => dispatch(closeModal());

  React.useEffect(() => {
    const clientID = localStorage.getItem('client_id')
    if (clientID) {
      dispatch(setClient(clientID))
    } else {
      const contractorID = localStorage.getItem('contractor_id')
      if (contractorID) {
        dispatch(setContractor(contractorID))
      }
    }
  }, []);

  return (
    <>
      <RootContainer isBlurred={modalIsVisible}>
        {children}
      </RootContainer>
      {modalContent !== null && <Modal onClose={onCloseModal}>{modalContent}</Modal>}
      {prompt !== undefined && <Prompt />}
      {alert !== undefined && <Alert />}
    </>
  );
};
