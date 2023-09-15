import React from 'react';
import { StyledGradientTitle } from './style';

type titleProps = {
  text: string;
}

const Button: React.FC<titleProps> = ({
  text,
}) => {
  return (
    <StyledGradientTitle align='left'>
      {text}
    </StyledGradientTitle>
      
  )
}

export default Button;