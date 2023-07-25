import { styled } from 'styled-components';
import { Grayscale, Color } from '../color';

export const Item = {
  Content: styled.div`
    word-break: break-all;
    word-wrap: break-word;
    flex-grow: 1;
    margin-left: 12px;
    max-width: 322px;
  `,
};

export const Content = {
  Info: styled.div`
    width: 100%;
  `,
};

export const Info = {
  Name: styled.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
  `,
  Content: styled.span`
    margin-left: 6px;
    font-size: 14px;
    font-weight: 400;
  `,
};

export const AddOns = {
  Container: styled.div`
    display: flex;
  `,
  CreateAt: styled.div`
    font-size: 12px;
    color: ${Grayscale[60]};
    font-weight: 400;
    margin-top: 4px;
  `,
};
