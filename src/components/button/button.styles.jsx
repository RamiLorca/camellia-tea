import styled from 'styled-components';

export const BaseButton = styled.button`

    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 auto;
    font-size: 15px;
    background-color: black;
    color: white;
    font-family: 'Poppins';
    font-weight: 590;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 4px;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

  