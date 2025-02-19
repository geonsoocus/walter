import React from 'react';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff0000;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.67rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const GrayButton = styled(Button)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ButtonContainer>
          <Button onClick={() => alert('글 작성하기 페이지로 이동')}>글 작성하기</Button>
          <GrayButton onClick={() => alert('내가 작성한 글 리스트로 이동')}>내가 작성한 글</GrayButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal; 