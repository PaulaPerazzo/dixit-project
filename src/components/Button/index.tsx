import React from 'react';
import { StyledButton } from './style';

type ButtonProps = {
  text: string;
  type?: string;
  onClick?: () => void | Promise<void>;
}

const Button: React.FC<ButtonProps> = ({
  text, onClick
}) => {
  return (
    <StyledButton onClick={onClick} type='submit'>
      {text}
    </StyledButton>
      
  )
}

export default Button;