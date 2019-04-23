import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  width: 1100px;
  padding-top: 30px;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-left: 5px;
  background-color: #1f78d1;
  height: 34px;
  width: 105px;
  border-radius: 15px;
  border: none;
`;