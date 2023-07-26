import styled from 'styled-components';
import { Grayscale, Color } from '../color';

const MakeStyle = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  Make: styled.div`
    border: 1px solid ${Grayscale[20]};
    border-radius: 12px;
    width: 700px;
    height: 400px;
    margin: 0 auto;

    > .title {
      position: relative;
      display: flex;
      height: 60px;
      border-bottom: 1px solid ${Grayscale[20]};
      justify-content: center;
      align-items: center;

      > p {
        font-size: 16px;
        font-weight: 400;
      }

      > img {
        position: absolute;
        left: 20px;
        width: 32px;
        cursor: pointer;
      }
    }

    img {
      width: 170px;
      border-radius: 5px;
      margin: 10px;
    }
  `,
  Link: styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    padding-top: 20px;
    a {
      color: ${Grayscale[80]};
      font-size: 14px;
      text-decoration: none;
      text-align: center;
      border-radius: 12px;

      > p {
        margin-bottom: 14px;
      }

      &:hover {
        box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.15);
        outline: 1px solid ${Color.Primary};
      }
    }
  `,
};

export default MakeStyle;
