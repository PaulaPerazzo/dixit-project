import React from 'react';
import { StyledButton } from './style';

type ButtonProps = {
  text: string;
  onClick: () => void;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  text, onClick
}) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
      
  )
}

export default SecondaryButton;
