import styled from 'styled-components';
import { Grayscale, Color } from '../color';

const CreateWorkoutStyle = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  ButtonContainer: styled.div`
    display: flex;
    position: absolute;
    bottom: 10%;
    z-index: 10;
  `,
  Cancel: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 5px;
    padding: 8px;
    border-radius: 50%;
    background-color: white;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: white;
    }
  `,
  Save: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    color: black;
    padding: 8px;
    border-radius: 50%;
    margin: 5px;
    &:hover {
      background-color: limegreen;
      color: white;
    }
  `,
  Makepage: styled.div`
    margin: 0 auto;
    border-radius: 12px;
    border: 1px solid ${Grayscale[20]};
    width: 700px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h4 {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      border-bottom: 1px solid ${Grayscale[20]};
    }
    > img.back {
      width: 32px;
      position: absolute;
      left: 20px;
      top: 14px;
      opacity: 0.5;
      cursor: pointer;
    }
  `,

  CreateBtn: styled.div`
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
    button {
      align-self: flex-start;
      background-color: ${Color.Primary};
      height: 46px;
      padding: 0 20px;
      color: ${Grayscale.White};
      border: none;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 6px;

      &[disabled] {
        cursor: not-allowed;
        background-color: ${Grayscale[40]} !important;
      }
    }
    button:hover {
      background-color: ${Color.Primary2};
      border: none;
    }
  `,
  Main: styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
  `,
  Img: styled.div`
    align-self: flex-start;
    border: 2px dashed #c1c1c1;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    display: inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    p {
      margin: 0;
    }
    input {
      display: none;
    }
    label {
      cursor: pointer;
    }
  `,

  Input: styled.div`
    text-align: left;
    width: 250px;
    p {
      margin: 0;
      font-size: 14px;
      color: ${Grayscale[60]};
      margin-bottom: 8px;
      text-align: left;
    }
    input {
      width: 100%;
      padding: 5px;
      border: 1px solid #cccccc;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    input:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(180, 180, 180, 0.5);
    }
    textarea {
      width: 100%;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: none;
      height: 152px;
    }
    textarea:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(180, 180, 180, 0.5);
    }
  `,
};

export default CreateWorkoutStyle;
