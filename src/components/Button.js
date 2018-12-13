import React from 'react';
import styled from 'styled-components';
import { Button as RebassButton } from 'rebass';



const StyledButton = styled(RebassButton)`
  cursor: pointer;
  
`

export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
);

export default Button;
