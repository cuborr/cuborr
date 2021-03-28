import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// store
import { RootState } from 'src/store';
import { closeModal } from 'src/store/layout/actions';
// assets
import { Modal } from './components/modal';
import { RootContainer } from './root.styles';

interface MenuProps {
  children: JSX.Element;
}

export const Root: React.FC<MenuProps> = ({ children }) => {
  // get the current route
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout);
  const { modalIsVisible, modalContent } = layout;

  const onCloseModal = () => dispatch(closeModal());

  return (
    <>
      <RootContainer isBlurred={modalIsVisible}>
        {children}
      </RootContainer>
      {modalContent !== null && <Modal onClose={onCloseModal}>{modalContent}</Modal>}
    </>
  );
};
