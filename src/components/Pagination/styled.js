import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  background-color: ${props => props.active === true ? '#1f78d1' : '#dddddd'};
  :focus {
    outline: none;
  } 
`;