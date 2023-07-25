import { styled } from 'styled-components';
import { Grayscale, Color } from '../color';

export const Text = styled.div`
  flex-grow: 1;
  padding-right: 20px;
  font-size: 14px;
  color: ${Grayscale[80]};
  line-height: 1.4;
  font-weight: 400;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Kcal = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${Color.Secondary};

  > span {
    font-weight: 400;
    font-size: 14px;
    margin-right: 4px;
    color: ${Grayscale[60]};
  }
`;

export const CrewingInfo = {
  Container: styled.div`
    margin-top: 20px;
  `,

  ActivityDate: styled.div`
    margin-bottom: 24px;
  `,

  DeadLine: styled.div`
    margin-bottom: 24px;
  `,

  PersonnelStatus: styled.div``,
};

export const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
`;

export const Content = styled.div`
  font-size: 14px;
  color: #000;
`;
