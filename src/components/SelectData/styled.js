import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
`;

export const Heading = styled.h3`
  text-align: center;
   
`;

export const Button = styled.button`
  width: 145px;
  height: 45px;
  border-radius: 22px;
  border: none;
  background-color: ${props => props.first? '#ee6b5f' : '#fbc731'};
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-right: ${props => props.first? '30px' : 0};
`;