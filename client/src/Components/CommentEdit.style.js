import { styled } from 'styled-components';
import { Grayscale, Color } from '../color';

export const Edit = {
  Container: styled.div`
    margin-left: 12px;
    width: 100%;
  `,
  Textarea: styled.textarea`
    border: 1px solid ${Grayscale[40]};
    border-radius: 6px;
    outline: 0;
    resize: none;
    min-height: 32px;
    max-height: 64px;
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
    }
  `,
};

export const Btn = {
  Container: styled.div`
    display: flex;
    justify-content: end;
    margin-top: 2px;
  `,
  Edit: styled.button`
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: ${Color.Secondary};
    cursor: pointer;
    margin-right: 8px;

    &:hover {
      color: ${Color.Tertiary};
    }
  `,
  Cancel: styled.button`
    border: 0;
    background-color: #fff;
    font-size: 14px;
    color: ${Grayscale[40]};
    cursor: pointer;

    &:hover {
      color: ${Grayscale[80]};
    }
  `,
};
