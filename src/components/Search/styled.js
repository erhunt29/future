import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #ecedf0;
  padding: 0 15px;
  :focus {
    outline: none;
    border: 1px solid #1f78d1;
  }
`;



export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-left: 20px;
  background-color: #1aaa55;
  height: 34px;
  width: 105px;
  border-radius: 15px;
  border: none;
`;