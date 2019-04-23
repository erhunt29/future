import styled from 'styled-components';

export const Indicator = styled.span`
  color: ${props => props.active === true? '#000' : '#c6c6c6'};
  padding-left: 5px;  
`;