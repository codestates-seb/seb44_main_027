import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Grayscale, Color, Red } from '../color';

export const LoginInputContainer = styled.section`
  width: 260px;
  margin-bottom: 20px;
`;

export const LoginHeading = styled.section`
  font-size: 18px;
  font-weight: 600;
  color: ${Grayscale[80]};
  margin-bottom: 48px;
`;

export const InputWithTitle = styled.section`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 260px;
  margin-bottom: 10px;
`;

export const InputHeading = styled.section`
  margin-bottom: 8px;
  color: ${Grayscale[60]};
`;

export const InputArea = styled.input`
  font-size: 16px;
  width: 100%;
  height: 46px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${Grayscale[40]};
  &:focus {
    outline: 1px solid ${Grayscale[80]};
  }
`;

export const InvalidInputIndicator = styled.section`
  margin: 4px;
  color: ${Red[10]};
  width: 260px;
  font-size: 12px;
`;

export const LoginButton = styled.button`
  background-color: ${Color.Secondary};
  color: white;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 260px;
  height: 46px;
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: 0;

  &:hover {
    background-color: ${Color.Tertiary};
  }
`;

export const SignUpLinkContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpLinkMessage = styled.section`
  font-size: 14px;
  margin-right: 12px;
  color: ${Grayscale[60]};
`;

export const SignUpLink = styled(Link)`
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
