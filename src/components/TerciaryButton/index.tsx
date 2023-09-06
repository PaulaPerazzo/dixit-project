import React from 'react';
import StyledButton from './style';

type ButtonProps = {
  text: string;
  onClick?: () => void;
}

const TerciaryButton: React.FC<ButtonProps> = ({
  text, onClick
}) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
      
  )
}

export default TerciaryButton;