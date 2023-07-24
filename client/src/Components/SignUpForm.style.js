import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Grayscale, Color, Red } from '../color';

export const SignUpInputContainer = styled.section`
  min-width: 330px;
  margin-bottom: 20px;
`;

export const SignUpHeading = styled.section`
  font-size: 18px;
  font-weight: 600;
  color: ${Grayscale[80]};
  margin-bottom: 48px;
`;

export const InputWithTitle = styled.section`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 330px;
  margin-bottom: 10px;
`;

export const InputHeading = styled.section`
  margin-bottom: 8px;
  color: ${Grayscale[60]};
`;

export const InputWithButtonContainer = styled.section`
  display: flex;
  width: 330px;
  align-items: center;
`;

export const InputAreaDefault = styled.input`
  font-size: 16px;
  width: 100%;
  height: 46px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${Grayscale[40]};
  background-color: ${Grayscale.White};
  &:focus {
    outline: 1px solid ${Grayscale[80]};
  }
`;

export const InputAreaShort = styled.input`
  font-size: 16px;
  width: 240px;
  height: 46px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${Grayscale.White};
  border: 1px solid ${Grayscale[40]};
  &:focus {
    outline: 1px solid ${Grayscale[80]};
  }
`;

export const CheckDuplicateButton = styled.button`
  background-color: ${Grayscale[80]};
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 82px;
  height: 46px;
  border-radius: 4px;
  margin-left: 8px;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Primary};
  }
  &:disabled {
    background-color: ${Grayscale[20]};
    cursor: not-allowed;
  }
`;

export const InvalidInputIndicator = styled.section`
  margin: 4px;
  color: ${Red[10]};
  width: 100%;
  font-size: 12px;
`;

export const ActivityAreaSelect = styled.select`
  font-size: 14px;
  line-height: 14px;
  height: 46px;
  padding: 0px 16px;
  border-radius: 4px;
  border: 1px solid ${Grayscale[40]};
  -webkit-appearance: none;
  appearance: none;
  &:focus {
    outline: 1px solid ${Grayscale[80]};
  }
`;

export const SignUpButton = styled.button`
  background-color: ${Color.Secondary};
  color: white;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 330px;
  height: 46px;
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${Color.Tertiary};
  }
  &:disabled {
    background-color: ${Grayscale[20]};
    cursor: not-allowed;
  }
`;

export const LoginLinkContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginLinkMessage = styled.section`
  font-size: 14px;
  margin-right: 12px;
  color: ${Grayscale[60]};
`;

export const LoginLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  color: ${Grayscale[80]};
`;

export const Logo = styled.img`
  width: 6rem;
  position: absolute;
  top: 50px;
  left: 50px;
`;
