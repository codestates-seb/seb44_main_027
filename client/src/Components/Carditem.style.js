import { styled } from 'styled-components';
import { Grayscale, Color } from '../color';

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  > img {
    display: block;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  > div {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: opacity 0.2s ease;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 28px;
      }

      > p {
        color: ${Grayscale.White};
        font-size: 22px;
        font-weight: 800;
        margin-left: 8px;
        margin-top: 2px;
      }
    }

    > .kal {
      color: ${Grayscale.White};
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 14px;
    }
  }

  &:hover {
    > div {
      opacity: 1;
    }
  }
`;
