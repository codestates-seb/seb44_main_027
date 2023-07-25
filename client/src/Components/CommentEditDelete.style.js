import { styled } from 'styled-components';
import { Grayscale } from '../color';

export const Btn = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,
  Menu: styled.div`
    width: 330px;
    border-radius: 12px;
    overflow: hidden;
    background-color: ${Grayscale.White};
  `,
  Edit: styled.button`
    border: 0;
    border-bottom: 1px solid ${Grayscale[20]};
    background-color: ${Grayscale.White};
    font-size: 14px;
    color: ${Grayscale[80]};
    cursor: pointer;
    margin-right: 10px;
    height: 60px;
    width: 100%;
    &:hover {
      background-color: ${Grayscale[20]};
    }
  `,
  Delete: styled.button`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${Grayscale[20]};
    background-color: ${Grayscale.White};
    font-size: 14px;
    color: #f21f1f;
    cursor: pointer;
    height: 60px;
    &:hover {
      background-color: ${Grayscale[20]};
    }
  `,
  cancel: styled.button`
    width: 100%;
    background-color: ${Grayscale.White};
    border: 0;
    font-size: 14px;
    color: ${Grayscale[80]};
    cursor: pointer;
    height: 60px;
    &:hover {
      background-color: ${Grayscale[20]};
    }
  `,
};

export const EditMenu = styled.img`
  margin-left: 8px;
  cursor: pointer;
  width: 20px;
  opacity: 0.6;
  margin-top: 1px;
`;
